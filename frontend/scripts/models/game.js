class Game {
    static startGame() { 
        while (Asteroid.moveAsteroid() < 510) { 
            Asteroid.moveAsteroid();
        }
    }
}