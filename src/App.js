import React, { useState } from "react";
import "./App.css";
import TodoForm from './TodoForm';
import Todo from './Todo';


const App =() =>{
  const [todos, setTodos] = useState([
    {
      text: "Make Todo List",
      isCompleted: true
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };


  return (
    <div className="app">
      <h2>Todo List</h2>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;