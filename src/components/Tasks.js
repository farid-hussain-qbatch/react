import React from "react";
import { FaTimes } from "react-icons/fa";

const Tasks = ({ tasks, setTasks }) => {
  const deleteTask = (name) => {
    setTasks(tasks.filter((task) => task.name !== name));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <>
      <div>
        <div
          style={{
            width: "50%",
            display: "inline-block",
          }}
        >
          {tasks.length > 0
            ? tasks.map((task, index) => (
                <h3
                  // className={"container" ${task.reminder ? 'reminder': '' }}

                  className={`container ${task.reminder ? "reminder" : ""}`}
                  onDoubleClick={() => toggleReminder(task.id)}
                  key={index}
                >
                  {task.name}{" "}
                  <FaTimes
                    style={{ color: "red" }}
                    onClick={() => deleteTask(task.name)}
                  />
                </h3>
              ))
            : "No Name"}
        </div>
      </div>
    </>
  );
};

export default Tasks;
