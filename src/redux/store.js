import { rootReducer } from "./rootReducer";
import {createStore} from 'redux'
// import {composeWithDevTools} from 'redux-devtools-extension'

let store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export {store}