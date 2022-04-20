const Spiderman = require('./../app/spiderman')
describe("Test Suite Dummy Description", () => {
    test('Case 1 Dummy', () => {
      const resultOfSomething = 1 + 2
      expect(resultOfSomething).toBe(3);
    });
  })
  describe("Unit test for Spiderman class",()=>{
      test('1 Create an Spiderman Object',()=>{
          //aqui se escribe el codigo que se quiere usar 
          //instanciar on objeto Spiderman con esta info
          const andrewGarfield = new Spiderman("Spiderman Sony",31,"Andrew Garfield",2,"Sony")
        
          //validar que el codigo funcione de la forma esperada
          expect(andrewGarfield.name).toBe("Spiderman Sony")
          expect(andrewGarfield.age).toBe(31)
          expect(andrewGarfield.actor).toBe("Andrew Garfield")
          expect(andrewGarfield.movies).toBe(2)
          expect(andrewGarfield.studio).toBe("Sony")
      });
      test('2 Metod getinfo()',()=>{
        const tomHolland = new Spiderman("Spiderman Marvel",25,"TomHolland",5,"Marvel")
        expect(tomHolland.getInfo())
      })
  })

  