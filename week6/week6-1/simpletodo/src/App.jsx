// import { useState } from 'react'
import React from 'react'

// let counter = 4
// function App() {

//  const [todos,setTodos] = useState([{
//   id: 1,
//   title: "go to gym",
//   description: "form 6pm to 7pm "
//  },{
//   id: 2,
//   title: "go to study hall",
//   description: "form 7pm to 10pm "

//  },{
//   id: 3,
//   title: "go to sleep",
//   description: "form 10pm to 4am "
//  }]);


//  function addnewTodo(){
//   setTodos([...todos,{
//     id:counter++,
//     title: Math.random(),
//     description: Math.random()
//   }])
// }

//   return (
//     <>
//       <div>
//         <button onClick={addnewTodo}>click me to add new todo</button>
//         {
//           todos.map(todo=> <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)
//         }
//        <Todo title="adding new todo" description='Adding new description'></Todo>
//       </div>
//     </>
//   )
// }

// function Todo({title,description}){
//   return <div>
//     <h1>{title}</h1>
//     <h5>{description}</h5>
//   </div>
// }



// export default App



// he is teaching about wrapper components in react


function App(){
  
  return <div>
    <CardWrapper innerComponent = { <TextComponent/>}/>

    <CardWrapper innerComponent = { <TextComponent2/>}/>
  </div>

}

function CardWrapper({innerComponent}){
  // create a div which has a border (hint: the way to create a border is border: 2px solid black)
  // and inside the div renders the prop

  return <div style = {{border: "2px solid black"}}>{innerComponent}
  </div>
}

function TextComponent(){
  return <div>
    Hi there!
  </div>
}


function TextComponent2(){
  return <div>
    Hi there2!
  </div>
}

export default App
