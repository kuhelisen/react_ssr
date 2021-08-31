import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import Routes from './Routes'
import reducers from './reducers'

const store = createStore(
    reducers,
    window.INITIAL_STATE,
    applyMiddleware(thunk)
)

ReactDOM.hydrate(
    <Provider store={store}>
        <HashRouter>
            <div>{renderRoutes(Routes)}</div>
        </HashRouter>
    </Provider>,
    document.querySelector('#root')
)
