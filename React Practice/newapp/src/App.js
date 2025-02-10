import './App.css';
import React from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';


export default function App() {
  return (
    <div>
      <NavBar />
      <div className='container my-5'>
        <h1>NEWS App</h1>
        <News />
      </div>

    </div >
  )
}
