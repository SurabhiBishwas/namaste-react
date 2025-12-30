import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement('h1', {id: 'headingId', xyz: 'abc'}, 'Hello World from Surabhi');
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(element);