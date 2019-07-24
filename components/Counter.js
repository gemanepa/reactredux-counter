import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props);
    
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
    this.incrementIfEven = this.incrementIfEven.bind(this);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.decrementAsync = this.decrementAsync.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementIfEven() {
    if (this.props.value % 2 === 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 5000)
  }

  decrementAsync() {
    setTimeout(this.props.onIncrement, 3000)
  }

  render() {
    const { value, onIncrement, onDecrement, onIncrementx10, onDecrementx5 } = this.props
    return (
      <React.Fragment>
        <h2>Counter: {value}</h2>
        <br />
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        <br /><br />
        <button onClick={this.incrementIfOdd}>
          Increment if odd number
        </button>
        {' '}
        <button onClick={this.incrementIfEven}>
          Increment if even number
        </button>
        <br /><br />
        <button onClick={this.incrementAsync}>
          Increment in 5 seconds (async)
        </button>
        {' '}
        <button onClick={this.decrementAsync}>
          Decrement in 3 seconds (async)
        </button>
        <br /><br />
        <button onClick={onIncrementx10}>
          Increment x10
        </button>
        {' '}
        <button onClick={onDecrementx5}>
          Decrement x5
        </button>
      </React.Fragment>
    )
  }
}

export default Counter
