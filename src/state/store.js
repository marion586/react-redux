import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
//thunk to help redux work with asyncronuos function like the action creator function

export const store = createStore(reducers, {}, applyMiddleware(thunk));
