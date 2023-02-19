import React from "react";
import styles from "./List.module.css";

const List = (props) => {
  return (
    <div className={styles.list}>
      <h2>
        {props.listTitle} - {props.listLength}
      </h2>
      {props.children}
    </div>
  );
};

export default List;
