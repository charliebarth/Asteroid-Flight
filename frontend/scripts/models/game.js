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
    }
    
    updateInfo = data => {
        this._id = data.id
    }

    static launchGame() { 
        let i = 1
        while (i <= 7) { 
            let star = new Asteroid(document.getElementById(`asteroid${i}`));
            star.moveAsteroid();
            asteroidArray.push(star);
            i++
        }
        const keysPressed = {};

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
        asteroidArray.forEach(function(star){
            clearInterval(star._move);
        });

    }
}