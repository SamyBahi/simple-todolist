import React from "react";
import styles from "./TodoItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import useHttp from "../../hooks/use-http";

const TodoItem = (props) => {
  const {
    checkingTaskIsLoading,
    checkingTaskHttpError,
    sendRequest: checkingTaskRequest,
  } = useHttp();

  const {
    deleteIsLoading,
    deleteHttpError,
    sendRequest: deleteRequest,
  } = useHttp();

  const checkboxChangeHandler = (event) => {
    const completedItem = {
      id: props.id,
      title: props.title,
      checked: event.target.checked,
    };

    console.log(completedItem["checked"]);
    checkingTaskRequest({
      url: `https://todos-af4a4-default-rtdb.europe-west1.firebasedatabase.app/todos/${completedItem["id"]}.json`,
      method: "PATCH",
      body: {
        checked: completedItem["checked"],
        lastModified: new Date().toISOString(),
      },
    });

    props.onCheckTodo(completedItem);
  };

  const deleteHandler = (event) => {
    event.preventDefault();

    deleteRequest({
      url: `https://todos-af4a4-default-rtdb.europe-west1.firebasedatabase.app/todos/${props.id}.json`,
      method: "DELETE",
    });

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
