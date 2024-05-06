import React from 'react';
import { useRecoilValue, useRecoilState, RecoilRoot ,useSetRecoilState} from 'recoil'; 
import { useState } from 'react';

function App() {
  return (
    <div>
      <RecoilRoot>
      <Todo></Todo>
      </RecoilRoot>
    </div>
  );
}

function Todo() {
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  return (
    <div>
      <input placeholder='title' onChange={(e)=>{
        setTitle(e.target.value)
      }} type="text" />
      <input  placeholder='description'type="text" onChange={(e)=>{
        setDescription(e.target.value)
      }} />
    </div>
  );
}




// function CountRenderer() {
//   const count = useRecoilValue(countAtom);
//   if(count%2==0)
//   {
//     return <div><>{count} It is even </></div>
//   }
//   return <div>{count}</div>;
// }

// function Buttons() {
//   const setCount= useSetRecoilState(countAtom);
//   console.log("Buttons rerendering");
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count =>count + 1);
//         }}
//       >
//         Increment
//       </button>
//       <button
//         onClick={() => {
//           setCount(count =>count - 1);
//         }}
//       >
//         Decrement
//       </button>
//     </div>
//   );
// }

export default App;
