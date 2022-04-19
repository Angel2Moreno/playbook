//1 obj vacio 
const obj ={}
console.log("objeto vacio!")
console.log(obj,"\n");

//obj con propiedades 
const obj2 ={
    name: "Angel",
    edad: 29
}
console.log("objeto con propiedades")
console.log(obj2,"\n");

//obj con diferentes propiedades 
 const objt3 = {
     name: "Angel",
     edad: 29,
     nicks: [
         "angel2dm",
         "davicho",
         "AD-0692"
     ],
     direccion: {
         Street: "Vicente Suarez 1",
         Suburb: "San jose Xalostox",
         ZipCode: 55360,
         City: "Mexico"
     }
 }
 console.log("Diferentes propiedades")
 console.log(objt3.name)
 console.log(objt3.nicks[2])
 console.log(objt3.direccion,"\n")

 //obj con metodo
 const objt4 = {
     cat : "Ramiro",
     sayHello:function(pet){
        console.log(`${this.cat} Dice Miau-Miau! -- ${pet}`)
     }
 }
 console.log("obj con metodo")
 objt4.sayHello("Rayas")
 console.log("\n")

 //obj que recive parametros 
 const myPet = {
    name: "Woopa",
    sayHelloToMyPet: function(yourPet){
      console.log(`${this.name} say's hello to ${yourPet}`)
    }
  }
  
  console.log("Objeto con método que recibe parámetros")
  myPet.sayHelloToMyPet("Tulio")