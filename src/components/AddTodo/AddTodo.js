import React, { useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");

  const addTodoHandler = (event) => {
    event.preventDefault();

    if (!title) return;

    const todoData = {
      id: Math.random().toString(),
      title: title,
    };

    props.onAddTodo(todoData);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <form>
        <div>
          <div>
            <label>Todo name</label>
            <input
              type="text"
              value={title}
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div>
            <button onClick={addTodoHandler} disabled={!title}>
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
