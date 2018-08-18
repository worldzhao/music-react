import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension' // eslint-disable-line
import reducers from './reducer'

const history = createBrowserHistory({
  basename: '/music/',
})

const store = createStore(
  connectRouter(history)(reducers), // new root reducer with router state
  compose(composeWithDevTools(applyMiddleware(
    thunk,
    routerMiddleware(history), // for dispatching history actions
  ))),
)

export { history }
export default store
