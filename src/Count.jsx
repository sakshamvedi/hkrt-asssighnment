import React, { useContext, useEffect } from 'react'
import Context from './Context/Context';
import ContextProvider from './Context/ContextProvider';
import Increase from './Increase';

function Count() {
    const { count } = useContext(ContextProvider);

    return (
        <>
            <div>Count : {count}
            </div>
            <Increase />
        </>
    )
}

export default Count