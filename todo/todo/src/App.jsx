import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { title: "Wakeup", description: "Wake up at 4AM", completed: true },
    { title: "Go to gym", description: "Hit gym at 8AM", completed: false },
    { title: "Go to college", description: "Go to college at 9AM", completed: true },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      { title: "New Task", description: "New task description", completed: false },
    ]);
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} title={todo.title} description={todo.description} />
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
}

export default App;
