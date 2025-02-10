import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Countries from './pages/Countries';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/countries" element={<Countries />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
