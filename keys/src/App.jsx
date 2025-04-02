import { useState } from "react"

function App(){
  const[todos,setTodos]=useState([{
    id:1,
    title:"Wake up",
    description:"Wake at 4 AM"
  },{
    id:2,
    title:"Hit the gym",
    description:"Hit the gym at 8 AM"
  },{
    id:3,
    title:"Go to college",
    description:"Go to the college at 10 AM"
  }])

  function addTodo(){
    setTodos([...todos,{
      id:4,
      title:"Hii",
      description:"Hello"
  }])
  }
  return(
    <div>
      <button onClick={addTodo}>Add a ToDo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
      {/* else   {todos.map(){
      return <Todo title={todos.title} description={todos.description}}}*/ }
    </div>



  )
}


function Todo(props){
  return (
    <div>
    <h1>{props.title}</h1>
    <h3>{props.description}</h3>
    </div>
  )
}
export default App