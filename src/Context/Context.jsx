import React, { useContext, useState } from 'react'
import ContextProvider from './ContextProvider'
function Context({ children }) {
    const [count, setCount] = useState(5);
    return (
        <ContextProvider.Provider value={{ count, setCount }}>
            {children}
        </ContextProvider.Provider>
    )
}

export default Context
