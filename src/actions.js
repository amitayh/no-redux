let nextId = 0;

export const changeTodoText = todoText => ({
  type: 'CHANGE_TODO_TEXT',
  nextState: state => ({...state, todoText})
});

export const addTodo = todo => ({
  type: 'ADD_TODO',
  nextState: state => {
    const newTodo = {id: nextId++, text: todo, completed: false};
    return {...state, todoText: '', todos: [...state.todos, newTodo]};
  }
});

export const toggleTodo = (id, completed) => ({
  type: 'TOGGLE_TODO',
  nextState: state => {
    const newTodos = state.todos.map(todo => {
      return (todo.id === id) ? {...todo, completed} : todo;
    });
    return {...state, todos: newTodos};
  }
});

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  nextState: state => {
    const newTodos = state.todos.filter(todo => todo.id !== id);
    return {...state, todos: newTodos};
  }
});

export const clearCompleted = {
  type: 'CLEAR_COMPLETED',
  nextState: state => {
    const newTodos = state.todos.filter(todo => !todo.completed);
    return {...state, todos: newTodos};
  }
};

export const toggleAll = {
  type: 'TOGGLE_ALL',
  nextState: state => {
    const newTodos = state.todos.map(todo => {
      return {...todo, completed: true};
    });
    return {...state, todos: newTodos};
  }
};

export const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  nextState: state => ({...state, filter})
});
