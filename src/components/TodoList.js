import React, { PropTypes } from 'react'
import Todo from './Todo'

//this component is reusable, strictly presentational
//you can pass any function you want to it's onClick event
//also, it has a nested component <Todo />
const TodoList = ({ todos, onTodoClick }) => ( //receives props
  <ul>
    {todos.map(todo => //nice ES6 functions
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

//this guarantees that the component receives data in specific format
//kind of like in strongly typed languages or in Model part of MVC
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
//code from http://redux.js.org/docs/basics/ExampleTodoList.html#componentstodolistjs