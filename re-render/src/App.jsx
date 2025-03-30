import { useState } from "react"

function App(){
  const[title,setTitle]=useState("My name is Vaishnavi")
  function onButtonPress(){
    setTitle("My name is "+Math.random())
  }
  return(
    <div>
      <button onClick={onButtonPress}>Update the title</button>
      <Header title={title}/>
      <Header title="My name is kirat"/>
    </div>

  )
}




function Header({title}){
  return(
    <div>
      {title}
    </div>
  )
}

export default App