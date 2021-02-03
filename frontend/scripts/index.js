document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        Spaceship.moveDodgerLeft();
    }
    if (e.key === "ArrowRight"){
        Spaceship.moveDodgerRight();
    }
    if (e.key === "ArrowUp"){
        Spaceship.moveDodgerUp();
    }
    if (e.key === "ArrowDown"){
        Spaceship.moveDodgerDown();
    }
});
