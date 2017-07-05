import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { homeReducer } from './reducers/reducers';

/*Component*/
import App from './components/App.jsx';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(homeReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    	<App />
	 </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);