const { render, screen, fireEvent } = require("@testing-library/react");
const { CounterApp } = require("../src/CounterApp");

describe('Testing in <CounterApp />', () => {
  const value = 0;

  test('must match with the snapshot', () => { 
    const { container } = render( <CounterApp value={ value } /> );
    expect( container ).toMatchSnapshot();
  });

  test('must be increase with the button at +1', () => { 
    render( <CounterApp value={ value } /> );
    fireEvent.click( screen.getByText('+1'));
    expect(screen.getByTestId('counter-value').textContent).toContain('1');
  });

  test('must decrease with the button at -1', () => { 
    render( <CounterApp value={ value } /> );
    fireEvent.click( screen.getByText('-1'));
    // screen.debug();
    expect(screen.getByTestId('counter-value').textContent).toContain('-1');
  });

  test('must be reset to 0', () => { 
    render( <CounterApp value={ value } /> );
    fireEvent.click( screen.getByText('Reset'));
    expect(screen.getByTestId('counter-value').textContent).toContain('0');
  });

});