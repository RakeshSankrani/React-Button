import "./App.css";
import { useState } from "react";


function App() {

  const [textbox, setTextbox] = useState(false)
  const [textarea, setTextarea] = useState(false)
  const [button, setButton] = useState(false)
  const [checkbox, setCheckbox] = useState(false)
  const [state, setState] = useState({
  })
  const [data, setData] = useState('')
 
  

  

  const onTextboxClick = () => {
    setTextbox(true)
    // setTextarea(false)
    // setButton(false)
    // setCheckbox(false)
  }

  const onTextareaClick =() => {
    // setTextbox(false)
    setTextarea(true)
    // setButton(false)
    // setCheckbox(false)
  }
  

  const onButtonClick = () => {
    // setTextbox(false)
    // setTextarea(false)
    setButton(true)
    // setCheckbox(false)
  }

  const onCheckboxClick = () => {
    // setTextbox(false)
    // setTextarea(false)
    // setButton(false)
    setCheckbox(true)
  }



  const handleChange = (e) =>{
    setData(e.target.name)
    console.log(data, e.target.value)

  }

  

  return (
    <div className="container-fluid">
      
      <div className="buttons p-3 mt-3">
      
        <button className="btn btn-primary" name='text_box' onClick={onTextboxClick}>Text box</button>
        <button className="btn btn-primary" name='text_area' onClick={onTextareaClick}>Text Area</button>
        <button className="btn btn-primary" name='btn_text' onClick={onButtonClick}>Button</button>
        <button className="btn btn-primary" name='check_box' onClick={onCheckboxClick}>Checkbox</button>
        

      </div>
      
      <div className="main text-center mt-4">

        {/* { 
            textbox === true ? <input type="text" onChange={handleChange}/> 
          : textarea === true ? <textarea cols="30" rows="10"  onChange={handleChange}></textarea> 
          : button === true ? <button >Pop up</button> 
          : checkbox === true ? <input type="checkbox" />
          : <p className="text-secondary">No Variant selected</p>
        } */}
        

         {
           textbox === true ? <p><input type="text" name="text_box" onChange={handleChange}/> </p> : null
         }
         {
           textarea === true ? <p><textarea cols="30" name="text_area" rows="10" onChange={handleChange}></textarea></p> : null
         }
         {
           button === true ? <p> <button>Hello</button> </p> : null
         }
          {
            checkbox === true ? <p> <input type="checkbox" name="checks" onChange={handleChange}/> </p> : null
          }


      </div>
 
      
     
    </div>
  );
}

export default App;

