import { EventEmitter } from 'events'
import dispatcher from '../dispatchers/TodoDispatcher';

const CHANGE_EVENT = 'change'
let nextId = 0

//functions below deal with data processing (adding/getting todos etc)
//most logic goes here
//doesn't care about presentation/layouts
//doesn't care how you handle 'change' event - just emit that the change happened
class TodoStore extends EventEmitter {
    constructor() { //initial state
        super()
        this.todos = []
    }
    
    emitChange(){
        this.emit(CHANGE_EVENT)
    }
    
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback)
    }
    
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }
    
    getTodos() {
        return this.todos
    }
    
    addTodo(item) {
        this.todos = [...this.getTodos(), { //array spread operator for easy append
            id: nextId++,
            completed: false,
            text: item}]
    }
    
    removeTodo(item) {
        
    }
    
    toggleTodo(id) {
        const todo = this.getTodos().filter((elem) => elem.id === id)[0] //find a todo to update
        if(todo !== undefined) {
          todo.completed = !todo.completed //toggle
        }
    }
    
    //subscribe to actions and handle them accordingly
    handleAction(action) {
        switch(action.type){
          case 'ADD_TODO':
            this.addTodo(action.item);
            break;
          case 'REMOVE_TODO':
            this.removeTodo(action.item);
            break;
          case 'TOGGLE_TODO':
            this.toggleTodo(action.item);
            break;
          default:
            break;
        }
        this.emitChange();
    }
}

const todoStore = new TodoStore()
dispatcher.register(todoStore.handleAction.bind(todoStore))

export default todoStore