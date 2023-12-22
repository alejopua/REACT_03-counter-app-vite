import { retornaArreglo } from "../../src/base-testing/07-deses-arr";

describe('Testing in 07-deses-arr', () => {  
  test('retornaArreglo should a string and a number', () => { 
    const [ letters, numbers ] = retornaArreglo();

    expect(letters).toEqual(expect.any(String));
    expect(numbers).toEqual(expect.any(Number));

    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');
  });

});