class Asteroid {
    constructor(star){
        const starStyle = getComputedStyle(star)
        this.name = star.id
        this._collided = false

        this._width = parseInt(starStyle.width.replace("px", ""), 10)
        this._height = parseInt(starStyle.height.replace("px", ""), 10)
        this._left = parseInt(starStyle.left.replace("px", ""), 10)
        this._bottom = parseInt(starStyle.bottom.replace("px", ""), 10)
        
        this._right = (this._left - this._width);
        this._top = (this._height + this._bottom);
        
    }

    moveAsteroid() {
        let movement = Helpers.getRndInteger(2, 6);

        const objPlace = document.getElementById(`${this.name}`);
        const starStyle = getComputedStyle(objPlace);
        const rock = this;

        let timer = setInterval (function () {

            if (rock._collided === true) {
                clearInterval(timer);
            
            } else if (rock._bottom > 20) {
                rock._width = parseInt(starStyle.width.replace("px", ""), 10)
                rock._height = parseInt(starStyle.height.replace("px", ""), 10)
                rock._left = parseInt(starStyle.left.replace("px", ""), 10)
                rock._bottom = parseInt(starStyle.bottom.replace("px", ""), 10)
                
                rock._right = (rock._left - rock._width);
                rock._top = (rock._height + rock._bottom);

                objPlace.style.bottom = `${rock._bottom - movement}px`
                //Helpers.findCollision(rock)
            
            } else if (rock._bottom <= 20) {
                rock._bottom = 470
                objPlace.style.bottom = "470px"
            }
        }, 100);
    }
}

