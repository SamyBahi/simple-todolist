import React from "react";
import TodoList from "./TodoList";
import List from "../UI/List";

const Todo = (props) => {
  return (
    <List listTitle="Tasks" listLength={props.items.length}>
      <TodoList items={props.items} onCheckTodo={props.onCheckTodo} />
    </List>
  );
};

export default Todo;
