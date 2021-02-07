class Game {
    constructor () {

    }

    static launchGame() { 
        let i = 1
        while (i <= 7) { 
            let star = new Asteroid(document.getElementById(`asteroid${i}`));
            star.moveAsteroid();
            i++
        }
        const keysPressed = {};
        
        document.addEventListener('keyup', (e) => {
            delete keysPressed[e.key];
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
}