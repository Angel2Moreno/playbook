class Spiderman{
    constructor(name, age, actor, movies, studio){
        this.name = name
        this.age = age
        this.actor = actor
        this.movies = movies
        this.studio = studio
}
    getInfo(){
        return `SpiderMan  ${this.name}, ${this.age},${this.actor},${this.studio}`
    }
}
module.exports = Spiderman