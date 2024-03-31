import { Chip } from '@mui/material';
import React, { useRef, useState } from 'react'

function Terminal() {
    const [code, setcode] = useState("");
    const [todo, settodo] = useState([]);
    const [error, seterror] = useState("");
    const coderef = useRef("");
    function passdata(e) {
        setcode(e.target.value);
    }
    function checkCode() {
        var getcode = code;
        coderef.current.value = "",
            console.log(getcode)
        if (code.length > 0) {
            if (code.toLowerCase().includes("tmx create")) {
                var todos = code.substring(10, code.length);
                setcode(todos)
                settodo(() => {
                    todo.push(todos);
                })
                seterror("")
                console.log(todo);
            }
            else {
                seterror("SYNTAX ERROR  !! Kindly Fix that .......zzzzz")
            }
        }
        else {
            seterror("SYNTAX ERROR  !! Kindly Fix that .......zzzzz")
        }
    }
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
                <div className="body-term" >
                    {error}
                </div>
                <div className='terminal-input'>

                    <label>P.S. Terminal // </label>
                    <input type="text" placeholder="Type Command " className='terminal-body' onChange={passdata} ref={coderef} />
                    <button onClick={checkCode}>Enter</button>
                </div>
            </div>


        </>
    )
}

export default Terminal;