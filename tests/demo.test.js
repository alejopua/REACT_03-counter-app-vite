
// eslint-disable-next-line no-undef
describe('First Test in <DemoComponent />', () => {
  // eslint-disable-next-line no-undef
  test('This test should pass', () => {
    // 1. inicialización
    const msg1 = 'Hola Mundo';

    //  2. estímulo
    const msg2 = msg1.trim();

    //  3. observar el comportamiento... esperado
    // eslint-disable-next-line no-undef
    expect( msg1 ).toBe( msg2 );
  });
});
