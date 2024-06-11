import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {Route,Routes,BrowserRouter} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },3000);
}

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - Dark mode";
      setInterval(()=>{
        document.title = "Textutils is amazing";
      },2000);
      setInterval(()=>{
        document.title = "Install Textutils";
      },1500);

      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = "Textutils - Light mode";
    }
  };
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    {/* <Navbar title="TextUtils" /> */}
    {/* <BrowserRouter> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes> */}
      {/* /users --> Component 1
        /users/home --> Component 2 */}
    {/* <Route exact path="/about" element={<About/>}></Route> */}
    <TextForm showAlert={showAlert} heading="Enter Text to analyze" mode={mode}/>
    {/* </Routes> */}
  </div>
{/* </BrowserRouter> */}
    </> 
  );
}

export default App;
