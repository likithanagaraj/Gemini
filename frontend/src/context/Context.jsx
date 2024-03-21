import { createContext, useState } from "react";
import runChart from '../config/Gemini'
export const Context = createContext()

const ContextProvider = (props)=>{
  const [input, setinput] = useState("")
  // input
  const [recentPrompt, setrecentPrompt] = useState("")
  // input histore
  const [prevPrompt, setprevPrompt] = useState([])
  const [showResult, setshowResult] = useState(false)
  const [loading, setloading] = useState(false)
  // final response
  const [resultData, setresultData] = useState("")
  // Function
  const onSent = async (prompt)=>{
    // State variable
    setresultData("")
    setshowResult(true)
    setrecentPrompt(input) 
    setprevPrompt(p => [...prevPrompt,input])               
      // call a runchart function
   const response = await runChart(input)
   setresultData(response)
   setinput("")
   
  
  
  }
  // Creating a object ,variable inside this object can be used where ever we want
  const contextValue = {
    prevPrompt,
    setprevPrompt,
    onSent,
    setrecentPrompt,
    recentPrompt,
    showResult,
    resultData,
    loading,
    input,
    setinput,
    
  }
  return(
    <Context.Provider value={contextValue} >
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider