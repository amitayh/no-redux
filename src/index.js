import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {initialState} from './model';
import registerServiceWorker from './registerServiceWorker';

let state = initialState;

const render = () => ReactDOM.render(
  <App state={state} dispatch={dispatch}/>,
  document.getElementById('root')
);

function dispatch(action) {
  state = action.nextState(state);
  if (typeof action.runEffect === 'function') {
    action.runEffect(dispatch);
  }
  render();
}

render(); // Initial render

registerServiceWorker();
