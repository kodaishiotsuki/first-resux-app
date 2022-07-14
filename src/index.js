import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';

//actions => increment , decrement
const increment = () => {
  return {
    type: "INCREMENT", //action名をつける（typeは何でもOK）
  };
}

const decrement = () => {
  return {
    type: "DECREMENT", //action名をつける（typeは何でもOK）
  };
}

//reducer => actionと前のstateを組み合わせて新しい状態に更新する
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

//store
let store = createStore(counterReducer); //引数にreducer

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


