import { useState,useEffect } from "react"
import axios from "axios"

function App() {
  const [selectedId, setSelectedId] = useState(1)

  return (
    <div>
      <button onClick={function () {
        setSelectedId(1)
      }}>1</button>
      <button onClick={function () {
        setSelectedId(2)
      }}>2</button>
      <button onClick={function () {
        setSelectedIdselectedId(3)
      }}>3</button>
      <button onClick={function () {
        setSelectedId(4)
      }}>4</button>
      <Todo id={selectedId}/>

    </div>


  )
}

function Todo({id}) {
  const[todo,seTodo]=useState({})

  useEffect(() => {
    axios.get("https://www.100xdevs.com")
      .then(function (res) {
        setTodo(Response.data.todos)
      })
  }, [id])
  return (
    <div>
      Id:{id}
      {todo.title}
      {todo.description}
    </div>
  )

}

export default App