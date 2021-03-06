class Helpers {
    static getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    static findCollision(htmlElement, asteroid) {
       
        const ship = document.getElementById("spaceship");
        let rect1 = htmlElement.getBoundingClientRect();
        let rect2 = ship.getBoundingClientRect();

        let overlap = !(rect1.right < rect2.left || 
            rect1.left > rect2.right || 
            rect1.bottom < rect2.top || 
            rect1.top > rect2.bottom)

        if (overlap === true) {
            asteroid._collided = true
        }
    }
}