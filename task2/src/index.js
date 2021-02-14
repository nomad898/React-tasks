import React from 'react';
import ReactDOM from 'react-dom'
import { App } from './App'
import { User } from '@models/User'
import './styles/styles.css'
import './styles/styles.scss'

let user = new User('John', 21);
user.toString();

async function CallAsync() {
  return await Promise.resolve('async is working')
}

CallAsync().then(console.log)

ReactDOM.render( 
  <App /> ,
  document.getElementById('root')
);