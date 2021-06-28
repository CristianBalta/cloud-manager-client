import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './main/App';
import {Provider} from 'react-redux';
import {createAppStore} from "./main/store/createStore"

const {store} = createAppStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
