import React, { Component } from 'react';

let input //this holds a reference to input element (using ref on element)
export default class InputTodo extends Component {
    render(){
        return (
          <form onSubmit={this.handleInput.bind(this)}>
            <input type="text" placeholder="Let's do something!" ref={node => {input = node}}/>
            <button type="submit">
              Add Todo
            </button>
        </form>
        )
    }
    handleInput(e) {
        e.preventDefault()
        if (!input.value.trim()) {
            return //prevent empty todos
        }
        this.props.updateTodos(input.value) //updateTodos is a function and it's called with a value of input
        input.value = ''
    }
}