import React from 'react';
import ReactDOM from 'react-dom'
import { App } from './App'
import User from '@models/User'
import './styles/styles.css'
import './styles/styles.scss'

let user = new User('John', 21);
user.start().then(console.log);

ReactDOM.render( 
  <App /> ,
  document.getElementById('root')
);