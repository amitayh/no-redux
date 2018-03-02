import React, {PureComponent} from 'react';
import 'todomvc-app-css/index.css';
import TodosHeader from './TodosHeader';
import TodosFooter from './TodosFooter';
import TodosList from './TodosList';
import {
  addTodo,
  changeFilter,
  changeTodoText,
  clearCompleted,
  deleteTodo,
  toggleAll,
  toggleTodo
} from '../actions';

export default class App extends PureComponent {
  render() {
    const {state, dispatch} = this.props;
    const {todos, todoText, filter} = state;
    return (
      <section className="todoapp">
        <TodosHeader
          todoText={todoText}
          onChangeTodoText={todoText => dispatch(changeTodoText(todoText))}
          onAddTodo={todo => dispatch(addTodo(todo))}
        />
        <TodosList
          todos={todos}
          filter={filter}
          onToggle={(id, completed) => dispatch(toggleTodo(id, completed))}
          onDelete={id => dispatch(deleteTodo(id))}
          onToggleAll={() => dispatch(toggleAll)}
        />
        <TodosFooter
          todos={todos}
          filter={filter}
          onChangeFilter={filter => dispatch(changeFilter(filter))}
          onClearCompleted={() => dispatch(clearCompleted)}
        />
      </section>
    );
  }
}
