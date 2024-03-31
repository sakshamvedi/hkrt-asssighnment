import React, { useContext } from 'react'
import ContextProvider from './Context/ContextProvider'


function Increase() {
    const { count, setCount } = useContext(ContextProvider);
    function inc() {
        setCount(count + 1);
    }
    return (
        <button onClick={inc}>Increase</button>
    )
}

export default Increase