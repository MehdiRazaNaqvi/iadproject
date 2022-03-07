import obj from "./reducer/reducer"
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

const store = createStore(obj , applyMiddleware(thunk))
export default store;