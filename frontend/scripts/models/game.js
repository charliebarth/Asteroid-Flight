class Game {
    // constructor () {
        
    // }

    createGame (currentUserId) {
        //api.postRound(currentUserId);
        this._userId = currentUserId;
        this.postGame
    }

    postGame = () => {
        api.postRound(this._userId)
        .then(roundData => {
          this.updateInfo(roundData.data)
        })
        game.style.display = 'block';
        Game.launchGame();
    }
    
    updateInfo = data => {
        this._id = data.id
        this._score = data.score
        currentGame = this
    }

    static launchGame() { 
        let currentScore = 0;
        let i = 1;
        const keysPressed = {};

        while (i <= 7) { 
            let star = new Asteroid(document.getElementById(`asteroid${i}`));
            star.moveAsteroid();
            asteroidArray.push(star);
            i++
        }
        currentGame._scoreTime = setInterval (function () {
            currentScore += 100
            currentGame._score = currentScore
        }, 1000);
        
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