import React, { useState } from "react";

const TodoButtons = (props) => {
  let { handleControlBtn, tasks } = props;

  return (
    <div>
      <div className="control-btn">
        <button onClick={() => handleControlBtn("all")}>All</button>
        <button onClick={() => handleControlBtn("not-done")}>Not Done</button>
        <button onClick={() => handleControlBtn("done")}> Done</button>
        {tasks.some((task) => task.done) ? (
          <button onClick={() => handleControlBtn("delete-all-done")}>
            Delete All Done Tasks
          </button>
        ) : null}
      </div>
    </div>
  );
};
export default TodoButtons;
