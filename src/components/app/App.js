import React from "react";
import "./App.css";
import Todo from "../todo/Todo";
import TodoForm from "../todoForm/TodoForm";

function App() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = text => {
  };

  const completeTodo = index => {
  };

  const removeTodo = index => {
  };

  return (
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, index) => (
              <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
              />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
  );
}

export default App;