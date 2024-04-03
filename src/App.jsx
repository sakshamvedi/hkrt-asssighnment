import React, { useContext, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Terminal from './Pages/Terminal';
import Count from './Count';
import Context from './Context/Context';
import ContextProvider from './Context/ContextProvider';
import Line from './Pages/Line';
import { Margin } from '@mui/icons-material';
import { FaArrowDown } from "react-icons/fa6";
import { colors } from '@mui/material';

function App() {
  const [counts, setCounts] = useState(0);
  const [counts1, setCounts1] = useState(0);
  const [counts2, setCounts2] = useState(0);
  const [variable, setVariable] = useState("invisible");
  const [variable2, setVariable2] = useState("invisible");
  const { variable3, count } = useContext(ContextProvider);
  function increase() {
    setTimeout(() => {
      setCounts(counts + 1);
    }, 2600)
    setCounts2();
    setVariable("")
    setTimeout(() => {
      setVariable("invisible")
    }, 2001)
    setTimeout(() => {
      setCounts1(counts1 + 1);
    }, 2002)
    setTimeout(() => {
      setVariable2("");
    }, 2003)
    setTimeout(() => {
      setVariable2("invisible");
    }, 2599)


  }

  return (
    <>
      <h1>Context API demo </h1>
      <div className='main-div'>
        <div>
          <div className='appsection'>
            <p>count , setCount and all hooks are defined in this area</p>
            <label>(App.js Section)</label>

          </div>
          <div className={`passingProps ${variable}`}>
            <div class="p-4 md:w-1/2 sm:w-1/4 w-full myflow">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-red-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 class="title-font font-medium text-xl text-white-900">{counts2} : Passing Props</h2>

              </div>
            </div>

          </div>

          <div className="countarea">
            <p>Having a count box to hold show.jsx and Increase.jsx</p>
            {counts1}
            <label>(Count.js Section)</label>
          </div>

          <div className={`passingProps ${variable2}`}>
            <div class="p-4 md:w-1/2 sm:w-1/4 w-full myflow">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-red-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 class="title-font font-medium text-xl text-white-900">{counts1} : Passing Props</h2>

              </div>
            </div>

          </div>


          <div className="showarea">
            <p style={{ color: "black", fontWeight: 800, fontSize: "34px" }}>{counts}</p>
            <label>(Count.js Section)</label>
          </div>

          <div className="increase">
            <p>A component to Increase the count value </p>
            <button className="flex mx-auto mt-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={increase}>Increase</button>
          </div>
          <FaArrowDown />
        </div>
        <div>
          <Line />
        </div>
        <div className='mobile-heading bg-indigo-700'>By Context  API </div>
        <div className='right-side'>
          <div className="context-box">
            <p>while <mark>useContext() </mark>can help in avoiding prop drilling and centralizing shared state</p>
          </div>
          <div className={`passingProps ${variable3}`}>
            <div class="p-4 w-full myflow2 bg-green-900">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-red-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 class="title-font font-medium text-xl text-white-900">{count} : Passing Props</h2>

              </div>
            </div>

          </div>
          <div className='appsection'>
            <p>A Count State just calling count.jsx component</p>
            <label>(App.js Section)</label>

          </div>


          <div className="countarea">
            <p>Having a count box to hold Show.jsx and Increase.jsx
            </p>
            {counts1}
            <label>(Count.js Section)</label>
          </div>

          <Count />

        </div>
      </div>

      <footer>
        Made with ❤️ by saksham vedi
      </footer>

    </>
  );
}

export default App;
