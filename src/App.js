import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(true)
  const changeState  = () => {
    setShowAddTask(!showAddTask)}
  const [tasks, setTasks] = useState([
    { id: 1, name: "Farid Hussain", reminder: true },
    { id: 2, name: "Abdullah Arif", reminder: false },
    { id: 3, name: "Ali bajwaa", reminder: true },
  ]);
  return (
    <div className="container">
      <Header title={"Recommedation"} name="-"  tasks={showAddTask} setTasks={changeState} />
     { showAddTask && <AddTask tasks={tasks} setTasks={setTasks}/>}
      {/* <Body /> */}
      <Tasks tasks={tasks} setTasks={setTasks}/>
    </div>
  );
};

export default App;
