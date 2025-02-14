import Myform from './pages/Myform';
import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', city: '' });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function validatForm() {
    let newerror = {};
    if (!formData.name) newerror.name = "Name is required!";
    if (!formData.email) newerror.email = "Email is required!";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newerror.email = "Invalid email format";
    if (!formData.city) newerror.city = "City is required!";
    setErrors(newerror);
    return Object.keys(newerror).length === 0;
  }

  function btnSubmit(e) {
    e.preventDefault();
    if (validatForm()) {
      console.warn(formData);
      setFormData({ name: '', email: '', city: '' });
      setErrors({});
    }

  }
  return (
    <div className="App">
      <h1>Form Submission with Validation</h1>
      <hr />
      <Myform btnSubmit={btnSubmit} handleChange={handleChange} formData={formData} />
    </div>
  );
}

export default App;
