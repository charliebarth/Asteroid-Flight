class User {
    // constructor (name) {
    //     this._name = name;
    // }

    // set userId(id) {
    //     this._id = id
    // }

    postUser = username => {
        api.postUser(username)
        .then(userData => {
          this.updateInfo(userData.data)
        })
        currentGame.createGame(this._id);
    }
    
    updateInfo = data => {
        this._id = data.id
        this.username = data.attributes.name
    }

    static login (event) {
        event.preventDefault();
        const user = new User;
        const username = document.getElementById("username-input").value;
        //if (user.postUser(username)) {userForm.style.display = "none"};
        user.postUser(username);
        userForm.style.display = "none"
    }

}