import { usContexts } from "../../src/base-testing/06-deses-obj";

describe('Testing in 06-deses-obj', () => {
  
  test('usContext should return a object', () => { 
    const person = {
      name: 'Tony',
      age: 45,
      clave: 'Ironman'
    };
    const { name, age, clave } = person;
    const rta = usContexts( person );

    expect(rta).toEqual({
        nombreClave: clave,
        anios: age,
      })
  });

});