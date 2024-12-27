import { useState } from "react";
const App = () => {
  const [input, setInput] = useState("");
  console.log(input);
  const [todo, setTodo] = useState([]);
  console.log(todo);

  //inputHandler
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  //addTodo
  const addTodo = () => {
    setTodo([input, ...todo]);
    setInput("");
  };

  //deleteTodo
  const deleteTodo = (delIndex) => {
    setTodo(todo.filter((item, index) => index !== delIndex));
  };

  return (
    <div className="main">
      <h1>TodoApp</h1>
      <div className="todoContainer">
        <input
          placeholder="Add Todo"
          type="text"
          value={input}
          onChange={inputHandler}
        />
        <button onClick={addTodo}>Add+</button>
        <ul className="todoList">
          {todo.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <span onClick={() => deleteTodo(index)}>X</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
