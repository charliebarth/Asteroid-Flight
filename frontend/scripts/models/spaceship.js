class Spaceship {

  // constructor(ship){
  //   const shipStyle = getComputedStyle(ship)
  //   this.name = ship.id

  //   this._width = parseInt(shipStyle.width.replace("px", ""), 10)
  //   this._height = parseInt(shipStyle.height.replace("px", ""), 10)
  //   this._left = parseInt(shipStyle.left.replace("px", ""), 10)
  //   this._bottom = parseInt(shipStyle.bottom.replace("px", ""), 10)
    
  //   this._right = (this._left - this._width);
  //   this._top = (this._height + this._bottom);
    
  // }

  static moveDodgerLeft() {
    const spaceship = document.getElementById("spaceship")
    let leftNumbers = spaceship.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        spaceship.style.left = `${left - 4}px`;
    }
  }

  static moveDodgerRight() {
    let spaceship = document.getElementById("spaceship")
    let leftNumbers = spaceship.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)

    if (left < 760) {
      spaceship.style.left = `${left + 4}px`
    }
  }

  static moveDodgerUp() {
    let spaceship = document.getElementById("spaceship")
    let leftNumbers = spaceship.style.bottom.replace("px", "")
    let left = parseInt(leftNumbers, 10)
  
    if (left < 505) {
      spaceship.style.bottom = `${left + 4}px`
    }
  }

  static moveDodgerDown() {
    let spaceship = document.getElementById("spaceship")
    let leftNumbers = spaceship.style.bottom.replace("px", "")
    let left = parseInt(leftNumbers, 10)
  
    if (left > 0) {
      spaceship.style.bottom = `${left - 4}px`
    }
  }

}





