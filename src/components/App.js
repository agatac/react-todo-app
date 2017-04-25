import React, { Component } from 'react';
import TodoList from './TodoList'
import InputTodo from './InputTodo'
import TodoStore from '../stores/TodoStore'
import TodoActions from '../actions/TodoActions'

class App extends Component {
  constructor() { //initialise
    super() 
    this.state = {
      todos: TodoStore.getTodos()
    }
    this.onChange = this.onChange.bind(this)
    this.updateTodos = this.updateTodos.bind(this) // bind the context IMPORTANT!
    this.toggleTodo = this.toggleTodo.bind(this) //I'm still trying to understand context and referencing
  }
  
  componentWillMount() { //runs only once
    TodoStore.addChangeListener(this.onChange) //whenever a store emits a change this callback will fire
  }
  
  componentWillUnmount() { //release listener
    TodoStore.removeChangeListener(this.onChange);
  }
  
  onChange() { //update the state
    this.setState({
      todos: TodoStore.getTodos()
    })
  }
  
  updateTodos(text) {
    TodoActions.addTodo(text) //broadcast an action and let store handle this
  }
  
  toggleTodo(id) {
    TodoActions.toggleTodo(id)
  }
  //renders input field with prop function that will update the state
  //App in the only component to update the state
  render() {
    return (
      <div className="App">
        <h1>Simple React Todo App</h1>
        <InputTodo updateTodos={this.updateTodos} />
        <div>
          <TodoList todos={this.state.todos} onTodoClick={this.toggleTodo} />
        </div>
      </div>
    );
  }
}

export default App;
