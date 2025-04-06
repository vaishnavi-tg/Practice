function App(){
  return (
    <Todo title = "Go to gym" 
    description="Go to gym at 8 am" 
    done={false}/>
   )

}

interface TodoProps{
  title:string,
  description:string,
  done:boolean
}

function Todo(props:TodoProps){
  return(
    <div>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
      {props.done}
    </div>
  )

}

export default App