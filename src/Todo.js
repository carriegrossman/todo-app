import React from "react";


const Todo = ({ todo, index, completeTodo}) => {
    
    return (
  
        <div
          className="todo"
          style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
          {todo.task}
  
          <div>
            <button onClick={() => completeTodo(index)}>Complete</button>
          </div>
        </div>
    
    );
  }

export default Todo;