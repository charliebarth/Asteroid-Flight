class Helpers {
    static getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    static findCollision(htmlElement, asteroid) {
        const box = document.getElementById("GameOver");
       
        // const shipStyle = getComputedStyle(document.getElementById("spaceship"))
    
        // const shipWidth = parseInt(shipStyle.width.replace("px", ""), 10)
        // const shipHeight = parseInt(shipStyle.height.replace("px", ""), 10)
        // const shipLeft = parseInt(shipStyle.left.replace("px", ""), 10)
        // const shipBottom = parseInt(shipStyle.bottom.replace("px", ""), 10)
        
        // const shipRight = (shipLeft - shipWidth);
        // const shipTop = (shipHeight + shipBottom);

        // let overlap = (star._right < shipLeft || star._left > shipRight || star._bottom < shipTop || star._top > shipBottom)
        const ship = document.getElementById("spaceship");
        let rect1 = htmlElement.getBoundingClientRect();
        let rect2 = ship.getBoundingClientRect();

        let overlap = (rect1.right < rect2.left || 
            rect1.left > rect2.right || 
            rect1.bottom < rect2.top || 
            rect1.top > rect2.bottom)

        if (overlap === false) {
            asteroid._collided = true
            box.style.top = "200px"
            box.style.left = "400px"
        }
    }




}