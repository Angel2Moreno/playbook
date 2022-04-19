class tw {
    constructor(socialMedia, name, hashtag){
    this.socialMedia = socialMedia
    this.name = name
    this.hashtag = hashtag
    }
    getInfo(){
        return `twitter ${this.name} tendencia ${this.hashtag}.`
    }
}
const twt = new tw("tw","angelDm","#innovaccion")
console.log(twt.getInfo())

class fb{
    constructor(user, apodo, post,friends){
        this.user = user
        this.apodo = apodo
        this.post = post
        this.friends=friends
    }
    getInfo(){
        return `facebook is ${this.user} has ${this.post}post and friends ${this.friends}`
    }
}
const face = new fb("Angel Moreno","দেবদূত", 200, 223)
console.log(face.getInfo()) 

class Uber {
    constructor(user, travels){
        this.user = user
        this.travels = travels
    }
    getInfo(){
        return `Travels of ${this.user} are ${this.travels}`
    }
}
const transport = new Uber("Angel","Supermercado")
console.log(transport.getInfo())
