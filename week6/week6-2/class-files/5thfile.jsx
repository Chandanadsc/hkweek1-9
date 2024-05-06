import React from 'react';

import { useState,useEffect } from 'react';

function App()
{
  const [counter,setCounter] = useState(0);

  const [inputValue,setInputValue] = useState(1);
  const [finalValue,setFinalValue] = useState(0);

  useEffect(()=>{
    let count = 0;
for(let i = 0;i<= inputValue;i++){
  count = count+1;
}
setFinalValue(count);

  },[inputValue]);




  return <div>
    <input onChange={function(e){
      setInputValue(e.target.value);
    } } placeholder={"Find sum form 1 to n"}></input>
    <br>
    </br>

    Sum from 1 to {inputValue} is {finalValue}
    <br />

    <button onClick={()=>{
      setCounter(counter +1);
    }}>Counter ({counter})</button>

  </div>


}

export default App