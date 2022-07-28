import React, {Component} from "react";
import "./todo-list-item.css";
export default class ToDoListItem extends Component {
  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={ onToggleDone }>
          {label}
        </span>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right "
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o fa-lg "></i>
        </button>
      </span>
    );
  }
}
