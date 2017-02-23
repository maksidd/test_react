import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import './index.css';

const initialState = [
  {itemName: 'fdghddf', itemList: ['esdafas','aasdfa','asdfdasa']},
  {itemName: 'sdfgsdfgs', itemList: ['asfasd','assdfgaasdfs']},
  {itemName: 'adsgfgsdfg', itemList: []}
];

function toDoList(state = initialState, action){
  if(action.type === 'ADD_ITEM') {
    if (action.isSubList === true){
      state[state.length-1].itemList = [
        ...state[state.length-1].itemList,
        action.payload
      ];
      return [...state];
    } else {
      return [...state, {itemName: action.payload, itemList: []}];
    }
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