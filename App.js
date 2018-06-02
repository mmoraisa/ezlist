import React from 'react'
import Main from './application/screens/Main'
import reducer from './application/reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const App = () => {
  return (
    <Provider store={ createStore(reducer,applyMiddleware(logger,thunk)) }>
      <Main />
    </Provider>
  )
}

export default App