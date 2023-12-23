import { useState } from 'react';
import PropTypes from 'prop-types';



// eslint-disable-next-line react/prop-types
export const CounterApp = ({ value }) => {
  const [count, setCount] = useState( value );

  const handleSubstract = () => {
    setCount(count - 1);
    // setCount((c) => c - 1);
  }

  const handleReset = () => {
    setCount( value );
  }

  const handleAdd = () => {
    setCount(count + 1);
    // setCount((c) => c + 1);
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center'>

      <h1 className="text-6xl font-bold text-teal-50">Counter App</h1>
      <h2 className="text-4xl font-bold text-red-500" data-testid='counter-value'> { count } </h2>

      <div className='flex bg-[#778da9] mt-1 p-3 rounded-md gap-x-2'>
      <button 
        className='bg-slate-400 px-6 py-1 border-solid border-4 border-black rounded-md text-3xl font-bold'
        value={count}
        onClick={ handleSubstract }
        > -1 </button>

      <button 
        className='bg-slate-400 px-6 py-1 border-solid border-4 border-black rounded-md text-3xl font-bold'
        value={count}
        onClick={ handleReset }
      > Reset </button>

      <button 
        className='bg-slate-400 px-6 py-1 border-solid border-4 border-black rounded-md text-3xl font-bold'
        value={count}
        onClick={ handleAdd }
      > +1 </button>
      </div>

    </div>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  value: 'No value'
}
