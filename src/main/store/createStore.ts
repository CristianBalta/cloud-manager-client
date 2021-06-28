import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import appReducer from "./reducers";

export const createAppStore = () => {
    const composeEnhancers =
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore<any, any, any, any>(
        appReducer,
        composeEnhancers(applyMiddleware(thunk)),
    );
    return {store};
};
