import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

const App = () => {
    return <div>Hello World!</div>;
};

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.querySelector('#root')
);
