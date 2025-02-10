import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      {/* Navbar Start */}
      <Navbar title="TOPS" />
      {/* Navbar End */}

      <div className="container my-5">
        <Textform />
      </div>
    </>
  );
}

export default App;
