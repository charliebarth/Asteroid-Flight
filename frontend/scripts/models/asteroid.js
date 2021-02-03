class Asteroid {
    // static moveAsteroid() {
    //     // let rock = document.getElementById(`asteroid${Helpers.applygetRndInteger(1, 6)}`)
    //     let rock = document.getElementById("asteroid1")
    //     let nums = rock.style.top.replace("px", "")
    //     let place = parseInt(nums, 10)
    
    //     if (place > ) {
    //       rock.style.top = `${place + 4}px`
    //     }
    //     
    // }
    static moveAsteroid() {
        let rock = document.getElementById("asteroid1")
        setInterval (function () {
            let topNumbers = rock.style.top.replace("px", "")
            let top = parseInt(topNumbers, 10)
            
            if (top < 510) {
                rock.style.top = `${top + 4}px`
            }
            else if (top >= 510) {
                clearInterval(timer);
            }
        }, 500);
    }
}

