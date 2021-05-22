import store from './store/index.js'
import { addAction,increment,subAction,decrement } from './store/actionsCreators.js'

store.subscribe(() => {
  console.log(store.getState());
})



store.dispatch(addAction(10))
store.dispatch(addAction(15))
store.dispatch(subAction(8))
store.dispatch(subAction(3))
store.dispatch(increment())
store.dispatch(decrement())
