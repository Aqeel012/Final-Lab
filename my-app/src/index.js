import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Routes from './routes/Routes'; // Make sure to adjust the import path based on your project structure
import reportWebVitals from './reportWebVitals';
import '../src/App.css'; // Import the CSS file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
