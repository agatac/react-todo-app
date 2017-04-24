import React, { Component } from 'react';
import TodoList from './TodoList'

const id = 0;
const todos = []

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id,
      todos
    }
    this.updateTodos = this.updateTodos.bind(this)
  }
  updateTodos(text) {
    const newId = this.state.id + 1
    this.setState({
      id: newId,
      todos: [...this.state.todos, {
        id: newId,
        completed: false,
        text: text}]
    })
  }
  render() {
    let input
    return (
      <div className="App">
        <h1>Simple React Todo App</h1>
        <div>
          <form onSubmit={e=>{
              e.preventDefault()
              if (!input.value.trim()) {
                return
              }
              this.updateTodos(input.value)
              input.value = ''
            }}>
            <input type="text" ref={node => {input = node}}/>
            <button type="submit">
              Add Todo
            </button>
            </form>
        </div>
        <div>
          <TodoList todos={this.state.todos} onTodoClick={() => {console.log('clicked')}} />
        </div>
      </div>
    );
  }
}

export default App;
