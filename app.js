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


const NavComponent = () => {
    return (
        <div style= {{
            display: 'flex',
            gap: '10px'
        }}>
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
            <span>Cart</span>
        </div>
    )
};

const ContactComponent = () => <h1>Contact Component</h1>;

const FooterComponent = () => (
    <div>
        <ContactComponent/>
        <h1>Footer Component</h1>
    </div>
);

// component composition is the process of combining multiple components to create a new component.
const pageTitle = 'Namaste React';

function HomeComponent() {
    return (
        <div>
            Welcome to {console.log(pageTitle)}.
            <NavComponent />
            <h1>Home Component</h1>
            <FooterComponent/>
        </div>
    )
}

console.log(typeof jsXElement);

console.log(jsXElement);
// rootElement.render(element);
rootElement.render(<HomeComponent/>); // this is a JSX element, not a ReactElement.