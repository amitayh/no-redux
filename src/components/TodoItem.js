import React, {PureComponent} from 'react';

export default class TodoItem extends PureComponent {
  render() {
    const {todo, onToggle, onDelete} = this.props;
    const {id, text, completed} = todo;
    const className = completed ? 'completed' : null;
    return (
      <li className={className}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={() => onToggle(id, !completed)}
          />
          <label>{text}</label>
          <button
            className="destroy"
            onClick={() => onDelete(id)}
          />
        </div>
        {/*<input className="edit" value="Create a TodoMVC template"/>*/}
      </li>
    );
  }
}
