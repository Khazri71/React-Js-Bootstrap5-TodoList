import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const TodoTask = (props) => {
  let { task, handleDeleteTask, handleTaskDone, sts } = props;

  return (
    <div>
      <div className="task">
        <p
          style={{ textDecoration: task.done ? "line-through" : "" }}
          onClick={() => handleTaskDone(task.id)} 
        >
          {task.todoText}
        </p>

        <button onClick={(e) => handleDeleteTask(e, task.id)}>
          <FontAwesomeIcon icon={faXmark} className="font-icon" />
        </button>
      </div>
    </div>
  );
};
export default TodoTask;
