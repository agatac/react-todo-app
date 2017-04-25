import { EventEmitter } from 'events'
//import {dispatch, register} from '../dispatchers/TodoDispatcher';

const CHANGE_EVENT = 'change'

//functions below deal with data processing (adding/getting todos etc)
//most logic goes here
//doesn't care about presentation/layouts
//doesn't care how you handle 'change' event - just emit that the change happened
class TodoStore extends EventEmitter {
    constructor() { //initial state
        super()
        this.todos = []
        this.id = 0
    }
    
    increase(item) {return item+1} //just a helper function for clarity
    
    emitChange(){
        this.emit(CHANGE_EVENT)
    }
    
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback)
    }
    
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }
    
    getId() {
        return this.id
    }
    
    getTodos() {
        return this.todos
    }
    
    addTodo(item) {
        const newId = this.increase(this.getId())
        this.id = newId
        this.todos = [...this.getTodos(), { //array spread operator for easy append
            id: newId,
            completed: false,
            text: item}]
        this.emitChange();
    }
    
    removeTodo(item) {
        
    }
    
    toggleTodo(item) {
        
    }
    
    // dispatcherIndex = register(function(action){
    // switch(action.type){
    //   case 'ADD_TODO':
    //     this.addTodo(action.item);
    //     break;
    //   case 'REMOVE_TODO':
    //     this.removeTodo(action.item);
    //     break;
    //   case 'TOGGLE_TODO':
    //     this.toggleTodo(action.item);
    //     break;
    //   default:
    //     break;
    // }})
}

const todoStore = new TodoStore()
export default todoStore