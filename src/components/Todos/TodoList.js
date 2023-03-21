import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = (props) => {
  return (
    <div>
      <ul className={styles["todo-list"]}>
        {props.items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              id={item.id}
              title={item.title}
              checked={item.checked}
              onCheckTodo={props.onCheckTodo}
              onDeleteCompleted={props.onDeleteCompleted}
            ></TodoItem>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
