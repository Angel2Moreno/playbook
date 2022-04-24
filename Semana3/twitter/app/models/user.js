class User {
    constructor(id, username, name, bio){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dataCreated = new Date()
        this.lastUpdated = new Date()
    }
    get getUsername(){
        return this.username
    }
        get getBio(){
        return this.bio
    }
    get getDataCreated(){
        return this.dataCreated
    }
    get getLastUpdated(){
        return this.lastUpdated
    }
    set setUsername(newUsername){
        this.username = newUsername
    }
    set setBio(NewBio){
        this.bio = NewBio
    }
}

module.exports = User