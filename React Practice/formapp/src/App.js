import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')

  function btnSubmit(e) {
    console.warn("Name:" + name, "Email:" + email, "City:" + city)
    e.preventDefault();
  }
  return (
    <div className='App'>
      <h1>Form Handling using ReactApp</h1>
      <hr />
      <form onSubmit={btnSubmit}>
        <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)}></input><br /><br />
        <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input><br /><br />
        <input type='text' placeholder='City' onChange={(e) => setCity(e.target.value)}></input><br /><br />
        <input type='submit'></input>
      </form>
    </div>
  );
}

export default App;
