import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css';
import App from './components/App/App';
import store from "./redux/store";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
