import { getGreetings } from "../../src/base-testing/02-template-string";

describe('Test in 02-template-string', () => {  

  test('getGreetings debe de retornar "Hola Peter"', () => { 
    const name = 'Peter';
    const message = getGreetings( name );
  });

});