import React, { useState, useEffect } from 'react'
import './App.css'
//Component import
import Form from './components/Form.js'
import TodoList from './components/TodoList.js'

function App() {
  var [userText, setUserText] = useState()
  var [task, setTask] = useState([])
  var [status, setStatus] = useState('ALL')
  var [filter, setFilter] = useState([])

  useEffect(() => {
    statusMonitor()
  }, [task, status])

  function statusMonitor() {
    switch (status) {
      case 'DONE':
        setFilter(task.filter((items) => items.completed === true))
        break
      case 'REMAINING':
        setFilter(task.filter((items) => items.completed === false))
        break
      default:
        setFilter(task)
        break
    }
  }

  return (
    <div className="app">
      <div className="container-center">
        <header>
          <h1>To-Do LIST</h1>
        </header>
        <main>
          <Form
            userText={userText}
            setUserText={setUserText}
            task={task}
            setTask={setTask}
            setStatus={setStatus}
          />
          <TodoList
            tasks={task}
            setTask={setTask}
            setStatus={setStatus}
            filter={filter}
          />
        </main>
      </div>
    </div>
  )
}

export default App
