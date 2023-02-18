import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const checkTodoHandler = (completedItem) => {
    props.onCheckTodo(completedItem);
  };

  const deleteCompletedHandler = (completedItemId) => {
    props.onDeleteCompleted(completedItemId);
  };

  return (
    <div>
      <ul>
        {props.items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              id={item.id}
              title={item.title}
              checked={item.checked}
              onCheckTodo={checkTodoHandler}
              onDeleteCompleted={deleteCompletedHandler}
            ></TodoItem>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
