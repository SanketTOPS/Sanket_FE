import './App.css';
import Navbar from './components/Navbar';
import Aboutpg from './components/Aboutpg';
import Contactpg from './components/Contactpg';
import Profilepg from './components/Profilepg';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="aboutpg" element={<Aboutpg />} />
            <Route path="contactpg" element={<Contactpg />} />
            <Route path="profilepg" element={<Profilepg />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
