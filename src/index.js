import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { config } from './overmind';
console.log(config)
const app = createOvermind(config, { devtools: true });
ReactDOM.render(
    <Provider value={ app }>
      <App/>
    </Provider>,
  document.getElementById('root'),
);
