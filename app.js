import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement('h1', {id: 'headingId', xyz: 'abc'}, 'Hello World from Test');
console.log(element);
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
console.log(typeof rootElement);

// JSX is not HTML in JavaScript, it is HTML like syntax in JavaScript.
const jsXElement = <h1>Hello World from JSX</h1>;
console.log(jsXElement);
// rootElement.render(element);
rootElement.render(jsXElement);