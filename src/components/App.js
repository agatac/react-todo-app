import React, { Component } from 'react';
import TodoList from './TodoList'

//right now I'm storing todos as global variables
const id = 0;
const todos = []

class App extends Component {
  constructor(props) { //initialise
    super(props) 
    this.state = {
      id,
      todos
    }
    this.updateTodos = this.updateTodos.bind(this) // bind the context IMPORTANT!
  }
  // updates state with new todo item
  updateTodos(text) {
    const newId = this.state.id + 1
    this.setState({
      id: newId,
      todos: [...this.state.todos, { //array spread operator for easy append
        id: newId,
        completed: false,
        text: text}]
    })
  }
  //later I'll move input into a separate component
  //right now it has to stay inside App because of updateTodos() which does setState()
  render() {
    let input //this holds a reference to input element (using ref on element)
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
