class Game {
    // constructor () {
        
    // }

    createGame (currentUserId) {
        //api.postRound(currentUserId);
        this._userId = currentUserId;
        this.postGame();
    }

    postGame () {
        api.postRound(this._userId)
        .then(roundData => {
          this.updateInfo(roundData.data)
        });

        Game.startButton();
    }
    
    updateInfo = data => {
        this._id = data.id
        this._score = data.score
        currentGame = this
    }

    static startButton (){
        startDiv.style.display = 'block';
        const startButton = document.getElementById(`start-button`)
        startButton.addEventListener("click", () => {
            Game.launchGame
            startDiv.style.display = 'none';
        });
    }

    static launchGame() {
        gameDiv.style.display = 'block'; 
        let i = 1;
        const keysPressed = {};
        currentGame.keepScore();

        while (i <= 7) { 
            let star = new Asteroid(document.getElementById(`asteroid${i}`));
            star.moveAsteroid();
            asteroidArray.push(star);
            i++
        }
        
        document.addEventListener('keyup', (x) => {
            delete keysPressed[x.key];
        })

        document.addEventListener('keydown', (e) => {
            keysPressed[e.key] = true;
            if (keysPressed['ArrowLeft'] && e.key == 'ArrowUp' || keysPressed['ArrowUp'] && e.key == 'ArrowLeft') {
                Spaceship.moveDodgerLeft();
                Spaceship.moveDodgerUp();
            } else if (keysPressed['ArrowLeft'] && e.key == 'ArrowDown'|| keysPressed['ArrowDown'] && e.key == 'ArrowLeft') {
                Spaceship.moveDodgerLeft();
                Spaceship.moveDodgerDown();
            } else if (keysPressed['ArrowRight'] && e.key == 'ArrowUp'|| keysPressed['ArrowUp'] && e.key == 'ArrowRight') {
                Spaceship.moveDodgerRight();
                Spaceship.moveDodgerUp();
            } else if (keysPressed['ArrowRight'] && e.key == 'ArrowDown'|| keysPressed['ArrowDown'] && e.key == 'ArrowRight') {
                Spaceship.moveDodgerRight();
                Spaceship.moveDodgerDown();
            } else if (e.key === "ArrowLeft") {
                Spaceship.moveDodgerLeft();
            } else if (e.key === "ArrowRight"){
                Spaceship.moveDodgerRight();
            } else if (e.key === "ArrowUp"){
                Spaceship.moveDodgerUp();
            } else if (e.key === "ArrowDown"){
                Spaceship.moveDodgerDown();
            }
        });
    }

    keepScore () {
        let currentScore = 0;
        this._scoreTime = setInterval (function () {
            currentScore += 100
            currentGame._score = currentScore
        }, 1000);
    }

    static endGame (){
        if (num === 7) {
            clearInterval(currentGame._scoreTime);
            api.updateRound(currentGame._id, currentGame._score)
            .then(roundData => {
                currentGame.updateInfo(roundData.data)
            });
        } 
    }
}