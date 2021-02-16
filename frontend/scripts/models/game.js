class Game {

    createGame (currentUserId) {
        this._userId = currentUserId;
        this.postGame();
    }

    postGame () {
        api.postRound(this._userId)
        .then(roundData => {
          this.updateInfo(roundData.data)
        });
        startDiv.style.display = 'block';
    }
    
    updateInfo = data => {
        this._id = data.id
        this._score = data.score
        currentGame = this
    }

    static startButton (){
        startDiv.style.display = 'none';
        Game.launchGame();
        
    }

    static launchGame() {
        //console.log(currentGame);
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

            setTimeout(function (){
                api.fetchRounds()
                .then(scoreData => {
                    const scores = scoreData.score
                    tempScores = scores.split(',')
                    tempScores[0] = tempScores[0].replace("[", "");
                    tempScores[9] = tempScores[9].replace("]", "");
                })
            }, 100)

            document.getElementById("end-score").textContent = `${currentGame._score}`
            
            
            setTimeout (function(){
                let list = document.getElementById("high-scores")
                tempScores.forEach(score => {
                    let entry = document.createElement('li');
                    entry.appendChild(document.createTextNode(score));
                    list.appendChild(entry); 
                });
                gameDiv.style.display = 'none';
                endDiv.style.display = "block";
                
            }, 500);
            
        } 
    }
}