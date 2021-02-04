class Asteroid {
    constructor(star){
        this._width = star.style.width
        this._hieght = star.style.hieght
        this._x = star.style.left
        this._y = star.style.bottom
    }

    static moveAsteroid() {
        let rock = document.getElementById(`asteroid${Helpers.getRndInteger(1, 7)}`)
        let movement = Helpers.getRndInteger(2, 6)
        let timer = setInterval (function () {
            let topNumbers = rock.style.top.replace("px", "")
            let top = parseInt(topNumbers, 10)
            
            if (top < 510) {
                rock.style.top = `${top + movement}px`
            } else if (top >= 510) {
                //clearInterval(timer);
                rock.style.top = "50px"
            }
        }, 100);
    }
}

