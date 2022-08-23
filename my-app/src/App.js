import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  //Weather darkmode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - DarkMode";

      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode ";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install textUtils now ";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - LightMode";
    }
  };

  return (
    // <BrowserRouter>
    <>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route */}
        {/* // exact */}
        {/* // path="/" */}
        {/* // element={ */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
          // />
          // }
        />
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* </Routes> */}
      </div>
    </>
    /* </BrowserRouter> */
  );
}

export default App;
