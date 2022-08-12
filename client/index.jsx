import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';


// eventually import styles here





/* SUMMARY AFTER PRESENTATION

i did get webpack+react functioning (in dev mode, though not initially with webpack-dev-server). i set up a skeletal frontend, with a single 'App' component that dynamically renders a div.

i then got my mongoDB functioning, with the server handling POST and GET requests. the database is called 'life-dashboard' in my MongoDB Atlas account, and the connection happens in server/server.js.

i then tried to set up webpack-dev-server, based on the 'build tools module' unit (containing a pre-build instance of tic-tac-toe via React). this kinda-sorta worked, but i started scrambling towards the end as i ran out of time before the presentation; somehow the App component stopped rendering, and i was left with nothing but the h1 element.

but so the next step would be to get webpack-dev-server ironed out, and then deal with the proxy stuff in order to connect the frontend and backend while remaining in dev mode.

for a more detailed history, see notes in "solo project" folder (in dropbox, not on github). note also the notes in Bear app.
*/





// fix a title, and set it as the innerText of both the title and h1 elements

const title = 'The Aaron Dashboard';
document.querySelector('title').innerText = title;
document.querySelector('h1').innerText = title;


console.log('quoteArr has length: ', quoteArr.length);


// render an instance of the App component
const container = document.querySelector('#theRootElt');
const root = createRoot(container);

root.render(<App />);