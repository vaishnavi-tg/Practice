import { useState } from "react"

function App() {

  return (
    <div>
      <HeaderWithButton/>
      <Header title="My name is vaishnavi2" />
    </div>

  )
}
function HeaderWithButton(){
  const [title, setTitle] = useState("My name is vaishnavi")
  function updateTitle() {
  setTitle("My name is " + Math.random())
}
  return (
    <div>
    <button onClick={updateTitle}>Update the title</button>
    <Header title={title}/>
    </div>
  )
}


function Header({ title }) {
  return (
    <div>
      {title}
    </div>
  )
}
export default App