import React, {PureComponent} from 'react';

const itemsLeft = todos => todos.reduce((acc, todo) => {
  return (todo.completed) ? acc : acc + 1;
}, 0);

export default class TodosFooter extends PureComponent {
  render() {
    const {todos, onClearCompleted} = this.props;
    return (
      <footer className="footer">
        <span className="todo-count"><strong>{itemsLeft(todos)}</strong> item left</span>
        <ul className="filters">
          {this.filterItem('ALL', 'All')}
          {this.filterItem('ACTIVE', 'Active')}
          {this.filterItem('COMPLETED', 'Completed')}
        </ul>
        <button className="clear-completed" onClick={() => onClearCompleted()}>
          Clear completed
        </button>
      </footer>
    );
  }

  filterItem(filter, displayText) {
    const props = this.props;
    const className = (filter === props.filter) ? 'selected' : null;
    return (
      <li>
        <a
          className={className}
          href="#"
          onClick={() => props.onChangeFilter(filter)}
        >
          {displayText}
        </a>
      </li>
    );
  }
}
