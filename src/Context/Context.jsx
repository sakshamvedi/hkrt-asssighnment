import React, { useContext, useState } from 'react'
import ContextProvider from './ContextProvider'
function Context({ children }) {
    const [count, setCount] = useState(5);
    const [variable3, setVariable3] = useState("invisible");
    return (
        <ContextProvider.Provider value={{ count, setCount, variable3, setVariable3 }}>
            {children}
        </ContextProvider.Provider>
    )
}

export default Context
