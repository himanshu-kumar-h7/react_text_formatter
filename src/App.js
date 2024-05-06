import "./App.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import { useState } from "react";
import AboutUs from "./AboutUs";
import Alert from "./Components/Alert";
import { BrowserRouter as Router } from 'react-router-dom';





function App() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const handleAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const handleMode1 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#6CB4EE";
      handleAlert("Dark mode is enabled", "Successs");
      //display
      // setInterval(() => {
      //   document.title = 'Textformatter - Home - Dark mode';
      // }, 1000);
      // setInterval(() => {
      //   document.title = 'Textformatter - 2 ';
      // }, 2000);
      document.title = "Textformatter - Home dark enabled ";
      setTimeout(() => {
        document.title = "Textformatter - Home ";
      }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      handleAlert("Light mode is enabledd", "Success");
    }
  };
  return (
    <>
   
      <Navbar
        title="TextUtils"
        Home="Home"
        text={text}
        Contact="Contact"
        mode={mode}
        handleMode1={handleMode1}
        Search="Search words"
        Searchbutton="search"
      />
      <Alert alert={alert} mode={mode} />
      <div className="container">
        <Form
          example="Say Something"
          setText={setText}
          handleAlert={handleAlert}
        />
      </div>
      <AboutUs />
      
    </>
  );
}

export default App;
