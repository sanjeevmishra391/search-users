import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
// import App from './App';

// js
// const heading  = document.createElement('h1');
// heading.innerText = 'Hey';

//jsx

// function formatUser(user) {
//   return user.firstName + " " + user.lastName;
// }

// const user = null;

// const greet = `Good Morning, ${user.firstName}`


// const greetings = <h1>Hey, {formatUser(user)}</h1>;

// function greetings(user) {
//   if(user) {
//     return <h1>Hello, {formatUser(user)}</h1>
//   } else {
//     return <h1>Hello, Someone</h1>
//   }
// }

// const root = document.getElementById('root');
// root.appendChild(h1);

const imgURL = 'https://images.unsplash.com/photo-1564648351416-3eec9f3e85de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a29zdGVubG9zZSUyMGJpbGRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
