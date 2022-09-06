
import './App.css';
import About from './components/About';
import { Navbar } from './components/Navbar';
import Textbox from './components/Textbox'
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    }
  )
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () =>{
    if (mode === 'light'){
       setmode('dark');
      document.body.style.backgroundColor = '#032848';
      showAlert("Dark mode has been enabled","success");
  }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode mode has been enabled","success");

  }
  }
  return (
<>
<Router>
<Navbar Text = "Ashwin"  mode = {mode} toggleMode ={toggleMode}/>
   <Alert alert = {alert} />
   <div className='container my-3'>
   <Routes>
          <Route path="/about" element = {<About />} />
          {/* </Route> */}
           <Route path="/" element = {<Textbox showAlert = {showAlert} heading = "Enter your text here." mode = {mode}/>}/>
          {/* </Route> */}
        </Routes>
    </div>
</Router>
  
    </>
  );
}

export default App;
