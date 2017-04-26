import React, { Component } from 'react';
import TodoList from './TodoList'
import InputTodo from './InputTodo'
import Filters from './Filters'
import TodoStore from '../stores/TodoStore'
import TodoActions from '../actions/TodoActions'

class App extends Component {
  constructor() { //initialise
    super() 
    this.state = {
      todos: TodoStore.getTodos(),
      filter: TodoStore.getFilter()
    }
    this.onChange = this.onChange.bind(this)
    this.updateTodos = this.updateTodos.bind(this) // bind the context IMPORTANT!
    this.toggleTodo = this.toggleTodo.bind(this) //I'm still trying to understand context and referencing
    this.setFilter = this.setFilter.bind(this)
    this.getFilteredTodos = this.getFilteredTodos.bind(this)
  }
  
  componentWillMount() { //runs only once
    TodoStore.addChangeListener(this.onChange) //whenever a store emits a change this callback will fire
  }
  
  componentWillUnmount() { //release listener
    TodoStore.removeChangeListener(this.onChange);
  }
  
  onChange() { //update the state
    this.setState({
      todos: TodoStore.getTodos(),
      filter: TodoStore.getFilter()
    })
  }
  
  updateTodos(text) {
    TodoActions.addTodo(text) //broadcast an action and let store handle this
  }
  
  toggleTodo(id) {
    TodoActions.toggleTodo(id)
  }
  
  setFilter(filter) {
    TodoActions.setFilter(filter)
  }
  
  getFilteredTodos(filter) {
    switch (filter) {
        default:
        case 'SHOW_ALL':
          return TodoStore.getTodos()
        case 'SHOW_COMPLETED':
          return TodoStore.getTodos().filter(t => t.completed)
        case 'SHOW_ACTIVE':
          return TodoStore.getTodos().filter(t => !t.completed)
      }
  }
  
  //renders input field with prop function that will update the state
  //App in the only component to update the state
  render() {
    return (
      <div className="App">
        <h1>Simple React Todo App</h1>
        <InputTodo updateTodos={this.updateTodos} />
        <div>
          <TodoList todos={this.getFilteredTodos(this.state.filter)} onTodoClick={this.toggleTodo} />
        </div>
        <Filters currentFilter={this.state.filter} onFilterClick={this.setFilter} />
      </div>
    );
  }
}

export default App;
