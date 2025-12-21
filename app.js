const element = React.createElement('h1', {id: 'headingId', xyz: 'abc'}, 'Hello World from JavaScript');
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(element);