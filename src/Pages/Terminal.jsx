import { Chip } from '@mui/material';
import React from 'react'

function Terminal() {
    return (
        <>

            <div className="main-text-box">
                <img src="https://static-00.iconduck.com/assets.00/todo-icon-2048x2048-pij2pwiy.png" height={"100px"} />
                <h2>Terminal X Todo</h2>
                <div className="chip-box">
                    <div className='chip'>
                        <p>Type <code>tmx create  "My Todo Here !!" </code> To create a todo</p>
                    </div>
                    <div className='chip'>
                        <p>Type <code>show </code>To List all the not completed todo </p>
                    </div>
                    <div className='chip'>
                        <p>Type <code>drawmap</code> To Create your dashboard for all your todo</p>
                    </div><div className='chip'>
                        <p>Type <code>Login</code> To Login to save your data</p>
                    </div>
                </div>

            </div>

            <div className='terminal'>
                <div className="body-term"></div>
                <div className='terminal-input'>
                    <label>P.S. Terminal // </label>
                    <input type="text" placeholder="Type Command " className='terminal-body' />
                </div>
            </div>


        </>
    )
}

export default Terminal;