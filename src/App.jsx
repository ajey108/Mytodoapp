import { useEffect, useState } from "react";
const App = () => {
  const [input, setInput] = useState("");

  const [todo, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  //inputHandler
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  //addTodo
  const addTodo = () => {
    if (input === "") {
      alert("Please Enter Todo");
      return;
    }
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
                <input id="check" type="checkbox" />

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
