import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const mount = (element) => {
    ReactDOM.render(<App />, element);
};

if (process.env.NODE_ENV === 'development') {
    const root = document.querySelector('#_marketing_dev_root');
    if (root) {
        mount(root);
    }
}

export { mount };
