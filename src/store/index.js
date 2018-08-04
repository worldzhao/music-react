import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension' // eslint-disable-line
import reducers from './reducer'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store
