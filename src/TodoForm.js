import React, {useState} from 'react';


function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="New Task!"
          type="text"
          className="input"
          value={value}
          onChange={evt => setValue(evt.target.value)}
        />
      </form>
    </div>
  );
}


export default TodoForm;