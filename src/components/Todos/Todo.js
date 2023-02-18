import React from "react";
import TodoList from "./TodoList";

const Todo = (props) => {
  const checkTodoHandler = (completedItem) => {
    props.onCheckTodo(completedItem);
  };

  return (
    <div>
      <h2>Tasks</h2>
      <TodoList items={props.items} onCheckTodo={checkTodoHandler} />
    </div>
  );
};

export default Todo;
