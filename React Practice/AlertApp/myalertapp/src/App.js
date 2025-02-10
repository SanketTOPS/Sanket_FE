import logo from './logo.svg';
import Navbar from './components/Navbar';
import Alertbutton from './components/Alertbutton';
import Alert from './components/Alert';
import { useState } from 'react';


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (type) => {
    setAlert(type);
    setTimeout(() => setAlert(null), 3000); // Auto close after 3 sec
  };

  const getAlertDetails = () => {
    switch (alert) {
      case "success":
        return { title: "Success!", description: "Your action was successful." };
      case "warning":
        return { title: "Warning!", description: "Be cautious with this action." };
      case "error":
        return { title: "Error!", description: "Something went wrong!" };
      case "confirmation":
        return { title: "Confirm Action", description: "Are you sure you want to proceed?" };
      default:
        return null;
    }
  };
  return (
    <>
      <Navbar />
      <Alert alert="This is ALert!" />
      <Alertbutton />

    </>
  );
}

export default App;
