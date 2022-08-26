
import './App.css';
// import About from './components/About';
import { Navbar } from './components/Navbar';
import Textbox from './components/Textbox'
import React, { useState } from 'react';


function App() {
  const [mode, setmode] = useState('light');

  const toggleMode = () =>{
    if (mode === 'light'){
       setmode('dark');
      document.body.style.backgroundColor = '#032848';
  }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';

  }
  }
  return (
<>
   <Navbar Text = "Ashwin"  mode = {mode} toggleMode ={toggleMode}/>
   <div className='container my-3'>
   <Textbox heading = "Enter your text here."mode = {mode}/>
   {/* <About/> */}
    </div>
    </>
  );
}

export default App;
