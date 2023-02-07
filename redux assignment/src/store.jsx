import { createStore } from "redux";
import rootReducer from './crud/reducers/rootreducer';
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// const Store = createStore(rootReducer);

const Store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);
export default Store;