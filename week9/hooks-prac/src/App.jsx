
import './App.css'

import React, { useState, useEffect } from 'react';
function App() {
  const [render,setRender] = useState(true);
useEffect(()=>{
  setInterval(()=>{
    setRender(r=>!r);

  },5000);
},[]);
  return (
    <>
     {render ?<MyComponent></MyComponent>: <div>empty div</div>}
    </>
  )
}
function MyComponent() {
  useEffect(() => {
    console.error("component mounted");

    return () => {
      console.log('component unmounted');
    };
  }, []);

  return <div>
    form inside my component
  </div>
}
export default App
