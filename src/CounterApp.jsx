import { useState } from 'react';
import PropTypes from 'prop-types';



// eslint-disable-next-line react/prop-types
export const CounterApp = ({ value }) => {
  const [count, setCount] = useState( value );

  const handleAdd = () => {
    
    setCount(count + 1);
    // setCount((c) => c + 1);

  }

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h1 className="text-6xl font-bold text-teal-50">Counter App</h1>
      <h2 className="text-4xl font-bold text-red-500"> { count } </h2>
      <button 
        className='bg-slate-400 px-6 py-1 border-solid border-4 border-black rounded-md text-3xl font-bold'
        value={count}
        onClick={ handleAdd }
        >+1</button>
    </div>
  )
}

CounterApp.propTypes = {
  value: PropTypes.string.isRequired
}

CounterApp.defaultProps = {
  value: 'No value'
}
