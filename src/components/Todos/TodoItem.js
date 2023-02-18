import React from "react";

const TodoItem = (props) => {
  const checkboxChangeHandler = () => {
    const completedItem = {
      id: props.id,
      title: props.title,
      checked: true,
    };
    props.onCheckTodo(completedItem);
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    props.onDeleteCompleted(props.id);
  };

  if (props.checked) {
    return (
      <li>
        <div>
          <div>
            <input
              type="checkbox"
              id={props.id}
              onChange={checkboxChangeHandler}
              checked
            ></input>
            <label>{props.title}</label>
          </div>
          <div>
            <button onClick={deleteHandler}>Delete</button>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li>
      <input
        type="checkbox"
        id={props.id}
        onChange={checkboxChangeHandler}
      ></input>
      <label>{props.title}</label>
    </li>
  );
};

export default TodoItem;
