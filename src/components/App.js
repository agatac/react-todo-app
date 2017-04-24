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
    this.toggleTodo = this.toggleTodo.bind(this)
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
        <InputTodo updateTodos={this.updateTodos.bind(this)} />
        <div>
          <TodoList todos={this.state.todos} onTodoClick={this.toggleTodo.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
