const { render } = require("@testing-library/react");
const { FirstApp } = require("../src/FirstApp");

describe('Testing in <FirstApp />', () => {
  
  // test('should match with snapshot', () => {
  //   const principalTitle = 'Hi, I am Alejandro';
  //   const { container } = render(<FirstApp principalTitle={principalTitle} />)
  
  //   expect(container).toMatchSnapshot();
  // });

  test('must show the PrincipalTitle in an h1', () => {
    const principalTitle = 'Hi, I am Alejandro';
    const { container, getByText, getByTestId } = render(<FirstApp principalTitle={principalTitle} />)
  
    expect(getByText(principalTitle)).toBeTruthy();
    expect(getByTestId('test-principalTitle').innerHTML).toBe(principalTitle);
    expect(getByTestId('test-principalTitle').innerHTML).toContain(principalTitle);

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(principalTitle);
  });

  test('must show the title in component', () => {
    const principalTitle = 'Hi, I am Alejandro';
    const title = 'I am a Software Developer';
    const { getByText, getAllByText } = render(
      <FirstApp 
        principalTitle={principalTitle} 
        title={title}
      />
    )
  
    // expect(getByText(title).innerHTML).toBe(title);
    expect(getAllByText(title).length).toBe(2);
  });

});