class Pokemon {
    constructor(name){
        this.Pokemon = name
  }
  sayHello (message) {
      console.log(`[Mi pokemon: ${this.Pokemon}] Saludo: ${message}`)
  }
  sayMessage (message) {
    console.log(`[Mi pokemon: ${this.Pokemon}] Mensaje: ${message}`)
  }
}
module.exports = Pokemon