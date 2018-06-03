import React from 'react'
import Main from './application/screens/Main'
import reducer from './application/reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const App = () => {
  return (
    <Provider store={ createStore(reducer,applyMiddleware(thunk)) }>
      <Main />
    </Provider>
  )
}

export default App