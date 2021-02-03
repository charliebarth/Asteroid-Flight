class Spaceship {

//   constructor(){
//       this._display 
//   }

  static moveDodgerLeft() {
    let spaceship = document.getElementById("spaceship")
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





