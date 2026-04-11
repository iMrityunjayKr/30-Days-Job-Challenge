import "./taskinput.css";

function TaskInput({ newTask, setNewTask, handleAdd }) {
  // console.log("TaskInput rendered!"); //
  return (
    <div className="input-container">
      <input
        className="input-task"
        type="text"
        placeholder="Add a new task..."
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <button className="addTaskbtn" onClick={handleAdd}>
        Add Task
      </button>
    </div>
  );
}
export default TaskInput;
