import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { applyMiddleware, compose, createStore } from "redux"
import { loggerMiddleware } from "./middleware/logger"
import { monitorReducerEnhancer } from "./enhancers/monitorReducer"
import thunkMiddleware from "redux-thunk"
import { rootReducer } from './reducers/index'
import App from "./App"

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
const composeEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer)
const store = createStore(rootReducer, undefined, composeEnhancers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
