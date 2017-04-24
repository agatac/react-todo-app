import React, { PropTypes } from 'react'

//this is a nested component of TodoList
//it renders a single todo item
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none' //cool ternary operator replaces if...else
    }}
  >
    {text}
  </li>
)

//this guarantees that the component receives data in specific format
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo

//code from http://redux.js.org/docs/basics/ExampleTodoList.html#componentstodojs