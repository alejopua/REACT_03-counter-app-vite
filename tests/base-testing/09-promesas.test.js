import { getHeroeByIdAsync } from "../../src/base-testing/09-promesas";

describe('Testing in 09-promesas', () => {

  test('getHeroeByIdAsync should return a hero', (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
      .then(heroe => {
        expect(heroe).toEqual(
          {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

        done();
      });
  });

  test("getHeroeByIdAsync should get an error if hero doesn't exist", (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .catch(error => {
        expect(error).toBe('No se pudo encontrar el héroe con id: ' + id);
        
        done();
      });
  });

});