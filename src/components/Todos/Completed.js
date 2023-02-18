import React from "react";
import TodoList from "./TodoList";

const Completed = (props) => {
  const deleteCompletedHandler = (completedItemId) => {
    props.onDeleteCompleted(completedItemId);
  };

  return (
    <div>
      <h2>Completed</h2>
      <TodoList
        items={props.items}
        onDeleteCompleted={deleteCompletedHandler}
      />
    </div>
  );
};

export default Completed;
