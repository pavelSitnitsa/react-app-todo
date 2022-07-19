import React from "react";
import "./todo-list-item.css";

const ToDoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "tomato" : "black",
  };
  return (
    <span className="todo-list-item">
      <span className="todo-list-item-label" style={style}>
        {label}
      </span>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right "
      >
        <i className="fa fa-trash-o fa-lg "></i>
      </button>
    </span>
  );
};

export default ToDoListItem;
