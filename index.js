import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { applyMiddleware ,createStore } from 'redux'
import loggerMiddleware from './middlewares/logger'
import counter from './reducers'
import Counter from './components/Counter'
import './style.css';

const store = createStore(counter, applyMiddleware(loggerMiddleware))
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <React.Fragment>
  <header>
    <h1>React + Redux Counter</h1>
    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"/>
    <img src="https://stickeroid.com/uploads/pic/full/thumb/stickeroid_5bf5719e6121a.png"/>
  </header>
  <main>
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    onIncrementx10={() => store.dispatch({ type: 'INCREMENTx10' })}
    onDecrementx5={() => store.dispatch({ type: 'DECREMENTx5' })}
  />
  </main>
  <footer>
    <h3>Made by <a href="https://gemanepa.com">gemanepa</a></h3>
    <a href="https://github.com/gemanepa/reactredux-counter">Check Code</a>
  </footer>
  </React.Fragment>
,
  rootEl
)

render()
store.subscribe(render)