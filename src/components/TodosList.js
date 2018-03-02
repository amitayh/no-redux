import React, {PureComponent} from 'react';
import TodoItem from './TodoItem';

const allCompleted = todos => {
  return todos.length > 0 && todos.every(todo => todo.completed);
};

const filterTodo = filter => todo => {
  switch (filter) {
    case 'ALL': return true;
    case 'ACTIVE': return !todo.completed;
    case 'COMPLETED': return todo.completed;
    default: return false;
  }
};

const filteredTodos = (todos, filter) => {
  return todos.filter(filterTodo(filter));
};

export default class TodosList extends PureComponent {
  render() {
    const {todos, filter, onToggle, onDelete, onToggleAll} = this.props;
    return (
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={allCompleted(todos)}
          onChange={() => onToggleAll()}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {filteredTodos(todos, filter).map(todo => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}
