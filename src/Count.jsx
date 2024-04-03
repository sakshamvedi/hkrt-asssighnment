import React, { useContext, useEffect } from 'react'
import Context from './Context/Context';
import ContextProvider from './Context/ContextProvider';
import Increase from './Increase';

function Count() {
    const { count } = useContext(ContextProvider);

    return (
        <>
            <div className='count-box'>Count :<h2 className='text-4xl'>{count}</h2>
            </div>
            <>
            </>
            <Increase />
        </>
    )
}

export default Count