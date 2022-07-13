import React from 'react';
import ReactDOM from 'react-dom/client';

const h1 = React.createElement('h1', null, 'Hello, React!');
console.log('React h1:', h1);

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(h1);
