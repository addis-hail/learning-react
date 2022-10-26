import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();

// //Create component
// var TodoComponent = React.createClass({
//   render: function(){
//     return(
//       <h1>Helloooo</h1>
//     );
//   }
// });

// // put component into html page
// ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));












