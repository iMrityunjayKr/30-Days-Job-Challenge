import "./todolist.css";
function Todolist({ todo, handleDelete, handleComplete }) {
  return (
    <div className="todolist">
      <ul className="todo-ul">
        {todo.map((task) => {
          return (
            <li
              className="list-task"
              key={task.id}
              onClick={() => handleComplete(task.id)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(task.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Todolist;
