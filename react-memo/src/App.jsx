import { useState } from "react"
import React from "react"

function App() {

  return (
    <div>
      <HeaderWithButton />
      <Header title="My name is Vaishnavi" />
    </div>

  )
}

function HeaderWithButton() {
  const [title, setTitle] = useState("My name is Ghibili")
  function updateTitle() {
    setTitle("My name is " + Math.random())
  }
  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title} />
    </div>

  )
}


const Header=React.memo(function Header({ title }) {
  return (
    <h1>{ title }</h1>
  )
})
export default App