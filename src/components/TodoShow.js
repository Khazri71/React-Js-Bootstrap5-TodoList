import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoButtons from "./TodoButtons";
import TodoTask from "./TodoTask";
const TodoShow = () => {
  let [tasksArr, setTasksArr] = useState([]);
  let [stus, setStus] = useState(false);

  let [status, setStatus] = useState("all");
  let [toggleAll, setToggleAll] = useState(false);

  //Add Task
  let addTask = (e, todoObj) => {
    e.preventDefault();
    setTasksArr([...tasksArr, todoObj]);
    localStorage.setItem(todoObj.id, JSON.stringify(todoObj));
    console.log(tasksArr);
  };
  //.Add Task

  //Delete Task
  let deleteTask = (e, id) => {
    e.preventDefault();
    let tasksAfterDeleteTask = tasksArr.filter((task) => task.id != id);
    setTasksArr(tasksAfterDeleteTask);
    localStorage.removeItem(id);
  };
  //.Delete Task

  //Control Btns
  let controlBtn = (st) => {
    setStatus(st);
  };
  let testBtn = (s) => {
    if (s == "not-done") {
      tasksArr = tasksArr.filter((task) => !task.done);
    } else if (s == "done") {
      tasksArr = tasksArr.filter((task) => task.done);
    } else if (s == "delete-all-done") {
      tasksArr = tasksArr.filter((task) => !task.done);
    }
  };
  testBtn(status);
  //.Control Btns

  //Toggle Task
  let taskDone = (id) => {
    let taskToggle = tasksArr.map((task) => {
      if (task.id == id) {
        setStus(!task.done);
        return {
          ...task,
          done: !task.done,
        };
      } else {
        return task;
      }
    });
    setTasksArr(taskToggle);
  };
  //.Toggle Task

  return (
    <div>
      <h1>ToDo List </h1>
      <TodoForm handleAddTask={addTask} />
      <TodoButtons handleControlBtn={controlBtn} tasks={tasksArr} />

      {tasksArr.length == 0 ? null : (
        <div className="control-btn">
          <button
            onClick={() => {
              let taskstoggle = tasksArr.map((task) => {
                return {
                  ...task,
                  done: toggleAll,
                };
              });

              setTasksArr(taskstoggle);
              setToggleAll(!toggleAll);
            }}
          >
            Toggle All
          </button>
        </div>
      )}

      {tasksArr.map((task) => (
        <TodoTask
          key={task.id}
          task={task}
          handleDeleteTask={(e) => deleteTask(e, task.id)}
          handleTaskDone={() => taskDone(task.id)}
          sts={stus}
        />
      ))}
    </div>
  );
};
export default TodoShow;
