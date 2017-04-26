import dispatcher from '../dispatchers/TodoDispatcher';

export default {
    addTodo(text) {
        dispatcher.dispatch({
            type: "ADD_TODO",
            item: text
        })
    },
    
    removeTodo(id) {
        dispatcher.dispatch({
            type: "REMOVE_TODO",
            item:  id
        })
    },
    
    toggleTodo(id) {
        dispatcher.dispatch({
            type: "TOGGLE_TODO",
            item: id
        })
    },
    
    setFilter(filter) {
        dispatcher.dispatch({
            type: "SET_FILTER",
            item: filter
        })
    }
}