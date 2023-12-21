import { getHeroeById, getHeroesByOwner } from "../../src/base-testing/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Testing in 08-imp-exp', () => { 

  // test 1
  test('getHeroeById should return the correct hero object', () => {
    const id = 1
    const hero = getHeroeById(1);

    // Se utiliza toEqual para comparar objetos de manera profunda
    expect( hero ).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC'
    })
  });

    // test 2
  test('getHeroeById should return undefined with incorrect hero', () => {
    const id = 40
    const hero = getHeroeById(id);

    // Se utiliza toEqual para comparar objetos de manera profunda
    expect( hero ).toBeFalsy();
  });

  // test 3
  test('getHeroesByOwner should return the correct team the heros object', () => {
    const owner = 'DC';
    const hero = getHeroesByOwner(owner);

    // Se utiliza toEqual para comparar objetos de manera profunda
    expect( hero ).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
  });

});