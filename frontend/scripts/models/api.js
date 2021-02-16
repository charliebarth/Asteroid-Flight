class API {
  
    static startWithPort(port = 3000) {
      const api = new API
      api.url = `http://localhost:${port}`
      return api
    }

    parseJSON = response => {
        if (response.status === 200){
          return response.json()
        }
        else {
          this.catchError(response)
          .then(resp => console.log(resp.error))
        }
    }

    catchError = response => response.json();

    headers = {"Accepts": "application/json", "Content-Type": "application/json"}

    get userURL() { return this.url + '/users' }
    get roundURL() { return this.url + '/rounds' }

    postUser = username => {
        return fetch(this.userURL, {
          method: "POST",
          headers: this.headers,
          body: JSON.stringify({user: { name: username } })
        })
        .then(this.parseJSON)
    }

    postRound = (userId) => {
        return fetch(this.roundURL, {
          method: "POST",
          headers: this.headers,
          body: JSON.stringify({round: {user_id: userId } })
        })
        .then(this.parseJSON)
    }

    fetchRounds = () => { 
        return fetch(this.roundURL)
        .then(this.parseJSON)

    }

    fetchUser = id => { 
        return fetch(this.userURL + `/${id}`)
        .then(this.parseJSON)
    }
    
    updateRound = (id, gameScore) => {
        return fetch(this.roundURL + `/${id}`, {
          method: "PATCH",
          headers: this.headers,
          body: JSON.stringify({ round: { score: gameScore}})
        })
        .then(this.parseJSON)
    }
}