import React from "react";
import TodoList from "./TodoList";
import List from "../UI/List";

const Completed = (props) => {
  const deleteCompletedHandler = (completedItemId) => {
    props.onDeleteCompleted(completedItemId);
  };

  const uncompleteTodoHandler = (uncompletedItem) => {
    console.log(uncompletedItem);
    props.onCheckTodo(uncompletedItem);
  };

  return (
    <List listTitle="Completed" listLength={props.items.length}>
      <TodoList
        items={props.items}
        onDeleteCompleted={deleteCompletedHandler}
        onCheckTodo={uncompleteTodoHandler}
      />
    </List>
  );
};

export default Completed;
