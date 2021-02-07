const api = API.startWithPort()
const newGame = new Game
let currentUser = ""
let currentGame = ""
let num = 0
const gameDiv = document.getElementById("game")
const loginDiv = document.getElementById("login")
const startDiv = document.getElementById("start")
const endDiv = document.getElementById(`end-of-game`)
const asteroidArray = []
const userForm = document.getElementById("username-form")

document.addEventListener("DOMContentLoaded", function(){
    gameDiv.style.display = 'none';
    startDiv.style.display = 'none';
    endDiv.style.display = "none";

});

userForm.addEventListener("submit", User.login);



