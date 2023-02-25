import React from "react";
import "./task.css";
import Remove from "../../images/remove.png";

export default function Task(props) {
  return (
    <li>
      <div className="w-5">
        <input
          onChange={(e) => props.markAsCompleted(e, props.todo.id)}
          type="checkbox"
        />
      </div>
      <div className="w-75">
        <span>{props.todo.content}</span>
      </div>
      <div className="w-20">
        <a href="#">
          <img width={20} src={Remove} alt="remove" />
        </a>
      </div>
    </li>
  );
}
