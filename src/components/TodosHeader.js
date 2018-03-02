import React, {PureComponent} from 'react';

export default class TodosHeader extends PureComponent {
  render() {
    const {todoText, onChangeTodoText} = this.props;
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={e => onChangeTodoText(e.target.value)}
          onKeyPress={e => this.handleKeyPress(e)}
          value={todoText}
          autoFocus
        />
      </header>
    );
  }

  handleKeyPress(e) {
    const {todoText, onAddTodo} = this.props;
    if (e.key === 'Enter') {
      onAddTodo(todoText);
    }
  }
}
