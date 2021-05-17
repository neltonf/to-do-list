import React from 'react'

function Todo({ task, tasks, setTask }) {
  const deleteBtn = () => {
    setTask(tasks.filter((el) => el.id !== task.id))
  }

  const doneBtn = () => {
    setTask(
      tasks.map((items) => {
        if (items.id === task.id) {
          return {
            ...items,
            completed: !items.completed,
          }
        }
        return items
      })
    )
  }

  return (
    <span className="todo">
      <div className={`list-item ${task.completed ? 'completed' : ''}`}>
        {task.text}
      </div>
      <button onClick={doneBtn} className="done-btn">
        DONE
      </button>
      <button onClick={deleteBtn} className="delete-btn">
        DELETE
      </button>
    </span>
  )
}

export default Todo
