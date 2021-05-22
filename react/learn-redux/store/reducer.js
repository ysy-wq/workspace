import { INCREMENT, DECREMENT, ADD_NUMBER, SUB_NUMBER} from './constants.js'
const defaultState = {
  counter: 0
}

function reducer(state = defaultState,action) {
  switch(action.type) {
    case INCREMENT:
      return {...state,counter: state.counter + 1}
    case DECREMENT:
      return {...state,counter: state.counter - 1}
    case ADD_NUMBER:
      return {...state, counter: state.counter + action.num}
    case SUB_NUMBER:
      return {...state, counter: state.counter - action.num}
    default:
      return state
  }
}

export default reducer