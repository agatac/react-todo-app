import React, { Component } from 'react';
import TodoList from './TodoList'
import InputTodo from './InputTodo'
import TodoStore from '../stores/TodoStore'

class App extends Component {
  constructor() { //initialise
    super() 
    this.state = {
      id: TodoStore.getId(),
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
      id: TodoStore.getId(),
      todos: TodoStore.getTodos()
    })
  }
  
  updateTodos(text) {
    TodoStore.addTodo(text) //let store handle this
  }
  
  //this is not moved to the store yet
  toggleTodo(id) {
    const todo = this.state.todos.filter((elem) => elem.id === id)[0] //find a todo to update
    if(todo !== undefined) {
      todo.completed = !todo.completed //toggle
      this.setState(Object.assign({},this.state,{ //Object.assign() returns a new object (useful when you don't want to mutate data) and is simillar to array spread operator
        todos:this.state.todos
      }))
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
          <TodoList todos={this.state.todos} onTodoClick={this.toggleTodo} />
        </div>
      </div>
    );
  }
}

export default App;
