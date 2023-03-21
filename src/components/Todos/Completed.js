import React from "react";
import TodoList from "./TodoList";
import List from "../UI/List";

const Completed = (props) => {
  return (
    <List listTitle="Completed" listLength={props.items.length}>
      <TodoList
        items={props.items}
        onDeleteCompleted={props.onDeleteCompleted}
        onCheckTodo={props.onCheckTodo}
      />
    </List>
  );
};

export default Completed;
