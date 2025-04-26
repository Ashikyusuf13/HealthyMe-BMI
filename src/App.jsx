import { useState } from 'react'
import './App.css'

function App() {
  const[height,setHeight]=useState('')
  const[weight,setWeight]=useState("")
  const[bmi,setBmi]=useState(null)
  const[status,setStatus]=useState("")
  const[error,setError]=useState("")

   const calculatebmi = ()=>{
    if(height && weight){
      const newheight= height/100;
      const newbmi= weight/(newheight*newheight);
      setBmi(newbmi.toFixed(2))

      if(newbmi<18.5){
        setStatus("Underweight")
      }
      else if(newbmi>=18.5 && newbmi<24.9)
        {
        setStatus("Normal Weight")
      }
    else if(newbmi>=25 && newbmi<29.9)
      {
      setStatus("Overweight")
      }
   else{
    setStatus("Obesity")
   }
    setError("")
  }
   else{
    setBmi(null)
    setStatus("")
    setError("Please enter the height and weight")
   
  }}

  return (
    <>
     <div className='Bmi-calculator-container'>
      <div className="image-box"></div>
      <div className='input-container'>
        <h1>Bmi Calculator</h1>
        {error &&  <div className="errormsg">{error}</div>}
        <div className="input">
          <label htmlFor="height">height(cm): </label>
          <input type="text"placeholder='Enter the height' value={height} onChange={(e)=>setHeight(e.target.value)} />
        </div>

        <div className="input">
          <label htmlFor="weight"> Weight(kg):</label>
          <input type="text"placeholder='Enter the Weight' value={weight} onChange={(e)=>setWeight(e.target.value)} />
        </div>
        <button onClick={calculatebmi}>calculate the Bmi</button>
        {bmi !== null && (
          <div className='result'>
          <p>Your Bmi is:{bmi}</p>
          <p>status: {status}</p>
        </div>
        )}
      </div>

     </div>
      
    </>
  )
}

export default App
