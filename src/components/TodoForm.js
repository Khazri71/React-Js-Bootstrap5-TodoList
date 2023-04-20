import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import uniqid from "uniqid";

const TodoForm = (props) => {
  let { handleAddTask } = props;
  let [taskText, setTaskText] = useState("");

  return (
    <div>
      <div className="add-task">
        <form
          onSubmit={(e) => {
            handleAddTask(e, { id: uniqid(), todoText: taskText, done: false });
            setTaskText("");
          }}
        >
          <input
            type="text"
            placeholder="Enter Task..."
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <button
            onClick={(e) => {
              handleAddTask(e, {
                id: uniqid(),
                todoText: taskText,
                done: false,
              });
              setTaskText("");
            }}
          >
            <FontAwesomeIcon icon={faPlus} beat className="font-icon" />
          </button>
        </form>
      </div>
    </div>
  );
};
export default TodoForm;
