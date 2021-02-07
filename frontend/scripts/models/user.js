class User {

    postUser = username => {
        api.postUser(username)
        .then(userData => {
          this.updateInfo(userData.data)
        })
    }
    
    updateInfo = data => {
        this._id = data.id
        this.username = data.attributes.name
        currentUser = this
        newGame.createGame(currentUser._id);
    }

    static login (event) {
        event.preventDefault();
        const user = new User;
        const username = document.getElementById("username-input").value;
        loginDiv.style.display = "none"
        user.postUser(username);

    }

}