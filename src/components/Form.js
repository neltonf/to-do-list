import React from 'react'

const Form = ({ userText, setUserText, setTask, task, setStatus }) => {
  var options = ['ALL', 'DONE', 'REMAINING']

  function inputListner(event) {
    setUserText(event.target.value)
  }

  function inputBtnHandler(event) {
    event.preventDefault()
    setTask([
      ...task,
      {
        text: userText,
        completed: false,
        id: Math.random() * 1000,
      },
    ])
    setUserText('')
  }

  function statusFinder(event) {
    setStatus(event.target.value)
  }

  return (
    <form className="form-wrapper">
      <input
        className="form-input"
        value={userText}
        onChange={inputListner}
        type="text"
      />
      <button className="form-btn" onClick={inputBtnHandler} type="submit">
        DONE
      </button>
      <select className="form-select" onChange={statusFinder}>
        {options.map(function (valueStatus) {
          return <option key={valueStatus} >{valueStatus}</option>
        })}
      </select>
    </form>
  )
}

export default Form
