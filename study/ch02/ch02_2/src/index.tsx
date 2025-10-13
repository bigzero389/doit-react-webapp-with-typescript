import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const CE = React.createElement;

const rootVirtualDOM = CE('ul', null, [
  CE('li', null, [
    CE('a', {href: 'http://www.google.com', target: '_blank'}, [
      CE('p', null, 'go to google')
    ])
  ])
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(rootVirtualDOM);
