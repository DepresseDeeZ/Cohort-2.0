// Lets create a simple todo app that renders 3 todos
// 1. Create a Todo component that accepts title, description as input
// 2. Initialise a state array that has 3 todos
// 3. Iterate over the array to render all the TODOs
// 4. A button in the top level App component to add a new TODO

import { useState } from "react";
let cnt = 4;
const App = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "title 1",
      description: "descritpiton of title 1",
    },
    {
      id: 2,
      title: "title 2",
      description: "descritpiton of title 2",
    },
    {
      id: 3,
      title: "title 3",
      description: "descritpiton of title 3",
    },
  ]);
  function changeTodo() {
    setTodo([
      ...todo,
      {
        id: cnt++,
        title: `title is ${Math.random()}`,
        description: `description is ${Math.random()}`,
      },
    ]);
  }

  return (
    <div>
      <button onClick={changeTodo}>add todo</button>
      {todo.map((todos) => (
        <Todo
          key={todos.id}
          title={todos.title}
          description={todos.description}
        />
      ))}
    </div>
  );
};

const Todo = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
};

export default App;
