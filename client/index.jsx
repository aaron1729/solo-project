import React from 'react';
import { createRoot } from 'react-dom/client';



// import { render } from 'react-dom';
import App from './components/App.jsx';



// eventually import styles here



// fix a title, and set it as the innerText of both the title and h1 elements

const title = 'Aaron Dashboard';
document.querySelector('title').innerText = title;
document.querySelector('h1').innerText = title;



// render an instance of the App component

const container = document.querySelector('#app');
const root = createRoot(container);

root.render(<App />);




/*


render(
    <App />,
    // <div>this is a div in the render function in index.jsx.</div>,
    document.querySelector('#root')
);

*/