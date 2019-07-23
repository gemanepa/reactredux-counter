import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counter from './reducers'
import Counter from './components/Counter'
import './style.css';

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <React.Fragment>
  <h1>React + Redux Counter</h1>
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    onIncrementx10={() => store.dispatch({ type: 'INCREMENTx10' })}
    onDecrementx5={() => store.dispatch({ type: 'DECREMENTx5' })}
  />
  </React.Fragment>
,
  rootEl
)

render()
store.subscribe(render)
