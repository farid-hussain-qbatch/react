import { useState } from "react";

const AddTask = ({ tasks, setTasks }) => {
  const [name, setName] = useState("");
  const [reminder, setReminder] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please add a Name");
      return;
    }
    setTasks([...tasks, { name, reminder }]);
    setName("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
