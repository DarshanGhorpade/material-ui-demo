import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';

// What I am saying here is 
// I want to render the app component inside of this root div that react provides us with
ReactDOM.render(
    <App />,
    document.getElementById('root')
);