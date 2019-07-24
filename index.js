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
  <header>
    <h1>React + Redux Counter</h1>
    <img src="https://2ch.hk/wrk/src/1503256/15494647078392.png"/>
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
    <a href="https://github.com/gemanepa/reactredux-counter">Check code</a>
  </footer>
  </React.Fragment>
,
  rootEl
)

render()
store.subscribe(render)
