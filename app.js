import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement('h1', {id: 'headingId', xyz: 'abc'}, 'Hello World from Test');
console.log(element);
const rootElement = ReactDOM.createRoot(document.getElementById('root'));

// JSX is not HTML in JavaScript, it is HTML like syntax in JavaScript.
// JSX is transpiled/converted/compiled to JavaScript by Babel. JSX is not a valid JavaScript syntax. Parccel has Babel installed by default.

// JSX => Babel => React.createElement() => JS object (ReactElement) => ReactDOM.render() => HTML

const jsXElement = (<div>
    Hello World from Surabhi
    <h2>Hello World from Neha</h2>
</div>);

console.log(typeof jsXElement);

console.log(jsXElement);
// rootElement.render(element);
rootElement.render(jsXElement);