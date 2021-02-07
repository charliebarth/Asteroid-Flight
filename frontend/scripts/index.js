const api = API.startWithPort()
let currentGame = new Game
const game = document.getElementById("game")
const asteroidArray = []
const userForm = document.getElementById("username-form")

document.addEventListener("DOMContentLoaded", function(){
    game.style.display = 'none';

});

userForm.addEventListener("submit", User.login);

// document.addEventListener('keyup', (e) => {
//     delete keysPressed[e.key];
// });

document.addEventListener('keydown', (e) => {
    // keysPressed[e.key] = true;
    // if (keysPressed['ArrowLeft'] && e.key == 'ArrowUp' || keysPressed['ArrowUp'] && e.key == 'ArrowLeft') {
    //     Spaceship.moveDodgerLeft();
    //     Spaceship.moveDodgerUp();
    // } else if (keysPressed['ArrowLeft'] && e.key == 'ArrowDown'|| keysPressed['ArrowDown'] && e.key == 'ArrowLeft') {
    //     Spaceship.moveDodgerLeft();
    //     Spaceship.moveDodgerDown();
    // } else if (keysPressed['ArrowRight'] && e.key == 'ArrowUp'|| keysPressed['ArrowUp'] && e.key == 'ArrowRight') {
    //     Spaceship.moveDodgerRight();
    //     Spaceship.moveDodgerUp();
    // } else if (keysPressed['ArrowRight'] && e.key == 'ArrowDown'|| keysPressed['ArrowDown'] && e.key == 'ArrowRight') {
    //     Spaceship.moveDodgerRight();
    //     Spaceship.moveDodgerDown();
    // } else if (e.key === "ArrowLeft") {
    //     Spaceship.moveDodgerLeft();
    // } else if (e.key === "ArrowRight"){
    //     Spaceship.moveDodgerRight();
    // } else if (e.key === "ArrowUp"){
    //     Spaceship.moveDodgerUp();
    // } else if (e.key === "ArrowDown"){
    //     Spaceship.moveDodgerDown();
    if (e.key === "W"){
        game.style.display = 'block';
        Game.launchGame();
    }
});


