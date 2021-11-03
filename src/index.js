import React from 'react';
import { render } from 'react-dom';
import App from './components/container/App';
import GlobalState from './components/container/globalState';

render(
    <GlobalState>
        <App />
    </GlobalState>,
    document.getElementById('root')
);
