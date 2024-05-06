import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";
const Dashboard = lazy(()=>import("./components/Dashboard"))

const Landing = lazy(()=> import("./components/Landing"))
function App()
{
  return(
  <div>
    
  <BrowserRouter>
  <Routes>
    <Route path="/dashboard" element={<Suspense><Dashboard/></Suspense>}></Route>

    <Route path="/" element={<Suspense><Landing/></Suspense>}></Route>
  </Routes>
<AppBar></AppBar>

  </BrowserRouter>
  </div>  

  )

  function AppBar()
  {
    const navigate = useNavigate();
  return (
   <div> <button onClick = {()=>{
    navigate('/');

   }}>landing page</button>
   <button onClick = {()=>{
     navigate('/dashboard');

   }}>dashboard page</button>
   <div style={{background:"black",color: "white"}}>this is the top bar</div></div>
  )
  }
  
}

export default App;