import React from 'react';
import ReactDOM from 'react-dom';
import {
  App,
  AppErrorBoundary
} from '@components/global';
import { Home } from '@pages';
import '@styles/reset.css';
import '@styles/roboto.css';
import '@styles/style.scss'

ReactDOM.render(
  <React.StrictMode>
    <AppErrorBoundary>
      <App id="app">
        <Home />
      </App>
    </AppErrorBoundary>
  </React.StrictMode >,
  document.getElementById('root')
);