class Helpers {
    static getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    static findCollision(rect1, rect2) {
        let box = document.getElementById("GameOver")
        if (rect1._x < rect2.style.left + rect2.style.width && rect1._x + rect1._width > rect2.style.left && rect1._y < rect2.style.top + rect2.style.height && rect1._height + rect1._y > rect2.style.top) {
            box.style.top = "200px"
            box.style.left = "400px"
        }
    }
}