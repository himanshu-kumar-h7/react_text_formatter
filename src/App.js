import "./App.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import { useState } from "react";
import AboutUs from "./AboutUs";
import Alert from "./Components/Alert";

function App() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const handleAlert = (message, type) => {
    setAlert({
      message : message,
       type : type
       });
       setTimeout(() => {
        setAlert(null)
       }, 2000);
  };
  const handleMode1 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#6CB4EE";
      handleAlert('Dark mode is enabled', 'Successs')
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      handleAlert('Light mode is enabledgit ', 'Success')
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
      <Alert alert={alert} />
      <div className="container">
        <Form example="Say Something" setText={setText} handleAlert={handleAlert}/>
      </div>
      <AboutUs />
    </>
  );
}

export default App;
