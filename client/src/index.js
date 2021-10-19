import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import './normalize.css'
import './index.css';
import App from './App';
import store from './Redux/store/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Provider store={store}>
            <App />
        </Provider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
