import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import './index.css';

const initialState = ['todo 1','todo 2'];

function toDoList(state = initialState, action){
  if(action.type === 'ADD_ITEM') {
    return [...state, action.payload];
  }
  return state;
}
const store = createStore(toDoList);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



//import { createStore } from 'redux';
//function playList(state = [], action){
//  console.log(action  );
//  return state;
//}
//const store = createStore(playList);
////console.log(store.getState());