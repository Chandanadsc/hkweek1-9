import {Fragment} from "react"
import { useState } from "react";
function App() {


  return (
 
      <>
      <HeaderWithButton/>
       <Header title = "My name is Chandana 2"></Header> 
       </>

  )
}

function HeaderWithButton(){
  const [title,setTitle] = useState("Chandana");

function SetNewName(){
  setTitle("My name is "+Math.random());
  
}
  return (
    <><button onClick={SetNewName}>Click me to change the title</button>
       <Header title = {title} /> </>
  )
}
function Header({title}){
  return (
    <div>
      {title}
    </div>
  )
}



export default App
