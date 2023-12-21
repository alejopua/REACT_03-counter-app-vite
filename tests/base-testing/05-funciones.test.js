import { getUser, getUsuarioActivo } from "../../src/base-testing/05-funciones";

describe('Testing in 05-funciones', () => {

  // test('getUser should return a object', () => {
  //   const user = getUser();

  //   expect(user).toEqual({
  //     uid: 'ABC123',
  //     username: 'El_Papi1502'
  //   });
  // });

  test('getUsuarioActivo should return a object', () => {
    const nameTest = 'Peter';
    const user = getUsuarioActivo(nameTest);

    expect(user).toStrictEqual({
      uid: 'ABC567',
      username: nameTest
    });

  });

});