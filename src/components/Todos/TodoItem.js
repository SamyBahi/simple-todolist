import React from "react";
import styles from "./TodoItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const TodoItem = (props) => {
  const checkboxChangeHandler = (event) => {
    const completedItem = {
      id: props.id,
      title: props.title,
      checked: event.target.checked,
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
        <div className={styles["todo-card"]}>
          <div className={styles["todo-card__left"]}>
            <input
              type="checkbox"
              id={props.id}
              onChange={checkboxChangeHandler}
              checked
              className={styles["todo-checkbox"]}
            ></input>
            <label htmlFor={props.id} className={styles["label__completed"]}>
              {props.title}
            </label>
          </div>
          <div className={styles["todo-card__right"]}>
            <button className={styles["todo-delete"]}>
              <FontAwesomeIcon onClick={deleteHandler} icon={faMinus} />
            </button>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li>
      <div className={styles["todo-card"]}>
        <div className={styles["todo-card__left"]}>
          <input
            type="checkbox"
            id={props.id}
            onChange={checkboxChangeHandler}
            className={styles["todo-checkbox"]}
          ></input>
          <label htmlFor={props.id}>{props.title}</label>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
