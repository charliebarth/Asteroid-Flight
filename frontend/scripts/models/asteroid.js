class Asteroid {
    constructor(star){
        const starStyle = getComputedStyle(star)
        this.name = star.id
        this._id = parseInt(star.id[8], 10)
        this._collided = false

        this._width = parseInt(starStyle.width.replace("px", ""), 10)
        this._height = parseInt(starStyle.height.replace("px", ""), 10)
        this._left = parseInt(starStyle.left.replace("px", ""), 10)
        this._bottom = parseInt(starStyle.bottom.replace("px", ""), 10)
        
        this._right = (this._left - this._width);
        this._top = (this._height + this._bottom);
        
    }

    moveAsteroid() {
        let movement = Helpers.getRndInteger(4, 7);

        const objPlace = document.getElementById(`${this.name}`);
        const starStyle = getComputedStyle(objPlace);
        const rock = this;

        this._move = setInterval (function () {

            if (rock._collided === true) {
                objPlace.style.bottom = `${rock._bottom - 20}px`
                clearInterval(rock._move);
                Asteroid.stopAsteroid();
            
            } else if (rock._bottom > 20) {
                rock._width = parseInt(starStyle.width.replace("px", ""), 10)
                rock._height = parseInt(starStyle.height.replace("px", ""), 10)
                rock._left = parseInt(starStyle.left.replace("px", ""), 10)
                rock._bottom = parseInt(starStyle.bottom.replace("px", ""), 10)
                
                rock._right = (rock._left - rock._width);
                rock._top = (rock._height + rock._bottom);

                objPlace.style.bottom = `${rock._bottom - movement}px`
                Helpers.findCollision(objPlace, rock)
            
            } else if (rock._bottom <= 20) {
                rock._bottom = 470
                objPlace.style.bottom = "470px"
                objPlace.style.left = `${Helpers.getRndInteger(60, 741)}px`
                movement = Helpers.getRndInteger(4, 7);
            }
        }, 100);
    }

    static stopAsteroid (){
        asteroidArray.forEach(function(currentStar){
            num++;
            Game.endGame();
            clearInterval(currentStar._move);
            
        });
    }
}

