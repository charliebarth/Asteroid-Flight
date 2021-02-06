class Game {
    static startGame() { 
        let i = 1
        while (i <= 7) { 
            let star = new Asteroid(document.getElementById(`asteroid${i}`));
            star.moveAsteroid();
            i++
        }
    }
}