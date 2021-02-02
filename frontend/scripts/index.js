let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 4}px`;
    
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "")
  let left = parseInt(leftNumbers, 10)

  if (left < 360) {
    dodger.style.left = `${left + 4}px`
  }

}

function moveDodgerUp() {
    let leftNumbers = dodger.style.bottom.replace("px", "")
    let left = parseInt(leftNumbers, 10)
  
    if (left < 375) {
      dodger.style.bottom = `${left + 4}px`
    }
  
}

function moveDodgerDown() {
    let leftNumbers = dodger.style.bottom.replace("px", "")
    let left = parseInt(leftNumbers, 10)
  
    if (left > 0) {
      dodger.style.bottom = `${left - 4}px`
    }
  
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight"){
    moveDodgerRight();
  }
  if (e.key === "ArrowUp"){
    moveDodgerUp();
  }
  if (e.key === "ArrowDown"){
    moveDodgerDown();
  }
});