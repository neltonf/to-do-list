import React from 'react'

import Todo from './Todo.js'

// message values
// status
// id

const TodoList = ({ tasks, setTask, filter }) => {
  return (
    <div className="todo-wrapper">
      <ul className="list-group">
        {filter.map((task) => (
          <Todo
            key={task.id}
            task={task}
            tasks={tasks}
            setTask={setTask}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
