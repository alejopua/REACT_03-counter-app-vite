const { render, screen } = require("@testing-library/react");
const { FirstApp } = require("../src/FirstApp");

describe('Testing in <FirstApp />', () => {
  const principalTitle = 'Hi, I am Alejandro';
  const title = 'I am a Software Developer';
  
  test('should match with snapshot', () => {
    const { container } = render( <FirstApp principalTitle={ principalTitle } /> )
    expect( container ).toMatchSnapshot();
  });

  test('must should message "Hi, I am Alejandro"', () => {
    render( <FirstApp principalTitle={ principalTitle } /> )
    expect( screen.getByText(principalTitle) ).toBeTruthy();
    // screen.debug();
  });

  test('must should the principalTitle in a h1', () => {
    render( <FirstApp principalTitle={ principalTitle } /> )
    expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain(principalTitle);
    // screen.debug();
  });

  test('must show the title in component', () => {
    render(
      <FirstApp 
        principalTitle={principalTitle} 
        title={title}
      />
    )
  
    expect( screen.getAllByText(title).length).toBe(2);
  });

});