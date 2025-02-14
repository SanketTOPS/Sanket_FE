import { useState } from 'react';
import './App.css';
import FormCompo from './pages/FormCompo';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', city: '' })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function btnSubmit(e) {
    e.preventDefault();
    console.warn("Form Data:", formData);
    setFormData({ name: '', email: '', city: '' }); // Reset form fields after submission
  }
  return (
    <div className="App">
      <h1>Form Handling using React</h1>
      <FormCompo formData={formData} handleChange={handleChange} btnSubmit={btnSubmit} />
    </div>
  );
}

export default App;
