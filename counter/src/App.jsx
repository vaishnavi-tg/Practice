import { useState } from "react"

function App(){
  const[count,setcount]=useState(0)
  return(
    <Button count={count} setcount={setcount}/>

  )
}

function Button(props){
  function onButtonClick(){
    props.setcount(props.count + 1)
  }
  return(
    <button onClick={onButtonClick}>Counter {props.count}</button>
  )

}
export default App