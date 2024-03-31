import React, { useContext } from 'react'
import ContextProvider from './Context/ContextProvider'


function Increase() {
    const { count, setCount, setVariable3 } = useContext(ContextProvider);

    function inc() {

        setVariable3("");
        setTimeout(() => {
            setVariable3("invisible");
        }, 1900);
        setTimeout(() => {
            setCount(count + 1);
        }, 2000);

    }
    return (
        <button onClick={inc} className='text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg'>Increase</button>
    )
}

export default Increase