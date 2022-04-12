export default class Pokemon {
    constructor (name) {
      this.Pokemon = name
    }
  
    log (message) {
      console.log(` Mi pokemon: ${this.Pokemon} Dice: ${message}`)
    }
  }