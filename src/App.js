
import './App.css';
// import About from './components/About';
import { Navbar } from './components/Navbar';
import Textbox from './components/Textbox'
import React, { useState } from 'react';
import Alert from './components/Alert';


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
   <Navbar Text = "Ashwin"  mode = {mode} toggleMode ={toggleMode}/>
   <Alert alert = {alert} />
   <div className='container my-3'>
   <Textbox showAlert = {showAlert} heading = "Enter your text here." mode = {mode}/>
   {/* <About/> */}
    </div>
    </>
  );
}

export default App;
