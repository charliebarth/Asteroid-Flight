class Asteroid {
    constructor(star){
        const starStyle = getComputedStyle(star)
        this.name = star.id
        this._width = starStyle.width
        this._hieght = starStyle.height
        this._left = starStyle.left
        this._bottom = starStyle.bottom
        this._collided = false
    }

    moveAsteroid() {
        let movement = Helpers.getRndInteger(2, 6);
        const objPlace = document.getElementById(`${this.name}`)
        const rock = this;
        let timer = setInterval (function () {
            let topNumbers = rock._bottom.replace("px", "")
            let xPlace = parseInt(topNumbers, 10)
            if (rock._collided === true) {
                clearInterval(timer);
            } else if (xPlace > 20) {
                rock._bottom = `${xPlace - movement}px`
                objPlace.style.bottom = `${xPlace - movement}px`
            } else if (xPlace <= 20) {
                rock._bottom = "470px"
                objPlace.style.bottom = "470px"
            }
        }, 100);
    }
}

