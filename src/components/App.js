import React, { Component } from 'react';
import TodoList from './TodoList'
import InputTodo from './InputTodo'

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
  //renders input field with prop function that will update the state
  //App in the only component to update the state
  //temporarily log something  when todoItem is clicked. Later that will toggle a todo
  render() {
    return (
      <div className="App">
        <h1>Simple React Todo App</h1>
        <InputTodo updateTodos={this.updateTodos.bind(this)} />
        <div>
          <TodoList todos={this.state.todos} onTodoClick={() => {console.log('clicked')}} />
        </div>
      </div>
    );
  }
}

export default App;
