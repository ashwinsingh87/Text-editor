import React,{useState} from 'react'

export default function Textbox(props) {

  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Text has been converted to Upper Case","success");

  }
  const handleLowClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Text has been converted to Lower Case","success");

  }
  const handleClearClick = () =>{
    setText("")
  }
  const handleCopyClick = () =>{
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been Copied","success");
  }

  const handleOnChange = (event) => {

    setText(event.target.value);
  }

    const[text, setText] = useState('')
    // text = "xyz" wrong way tp change the state
    // setText("xyz") correct way to change the state 
  return (
<>
    <div className='container' style={{color:props.mode==='dark'?'white':'#032848'}}>
      {/* first curly braces is bcoz we are applying js to it and 2nd one is bcoz we are using an object */}
        <h1 >{props.heading}</h1>
        <div className='mb-3'>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'rgb(25 59 86)', color:props.mode==='light'?'#032848':'white'}} id='mybox' rows = "8"></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Convert to lowercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleCopyClick}>Copy Text</button>

    </div>
    <div className='container my-3'  style={{color:props.mode==='dark'?'white':'#032848'}}>
      <h3>Your text summary</h3>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charachers</p>
   
    <p>{0.008 * (text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:'Enter in the text box above to see the preview.'}</p> 
    </div>
</>
  )
} 



