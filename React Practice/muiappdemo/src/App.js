import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Buttons from './components/Buttons';
import Cards from './components/Cards';
import AppBarcmp from './components/AppBarcmp';
import Gridsys from './components/Gridsys';
import Theming from './components/Theming';
import TypographyC from './components/TypographyC';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Buttons />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/theming" element={<Theming />} />
        <Route path="/gridsys" element={<Gridsys />} />
        <Route path="/typographyc" element={<TypographyC />} />
        <Route path="/appbarcmp" element={<AppBarcmp />} />
      </Routes>
    </Router>
  );
}

export default App;
