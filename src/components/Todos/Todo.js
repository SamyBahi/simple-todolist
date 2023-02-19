import React from "react";
import TodoList from "./TodoList";
import List from "../UI/List";

const Todo = (props) => {
  const checkTodoHandler = (completedItem) => {
    props.onCheckTodo(completedItem);
  };

  // return (
  //   <div className={styles["tasks"]}>
  //     <h2 className={styles["list-title"]}>Tasks - {props.items.length}</h2>
  //     <TodoList items={props.items} onCheckTodo={checkTodoHandler} />
  //   </div>
  // );

  return (
    <List listTitle="Tasks" listLength={props.items.length}>
      <TodoList items={props.items} onCheckTodo={checkTodoHandler} />
    </List>
  );
};

export default Todo;
