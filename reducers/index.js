export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'INCREMENTx10':
      return state + 10
    case 'DECREMENTx5':
      return state - 5
    default:
      return state
  }
}