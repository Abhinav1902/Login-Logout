import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import the Provider component
import store from './redux/store'; // Import your Redux store
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}> {/* Wrap your App with Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);
