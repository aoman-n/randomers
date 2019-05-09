import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

// import { Provider } from 'react-redux';
// import { rootReducer } from './modules';
import App from './App';

import './styles/reset.css';
import 'semantic-ui-css/semantic.min.css';

// const store = createStore(rootReducer);

ReactDOM.render(
  // <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </Provider>,
  document.getElementById('root'),
);
