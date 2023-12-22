import { getImagen } from "../../src/base-testing/11-async-await";

describe('Testing in 11-async-await', () => {

  test('getImagen should return url the img', async() => {

    const url = await getImagen();
    console.log(url);
    expect( typeof url ).toBe('string');
  });

});