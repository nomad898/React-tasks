import React from 'react';
import ReactDOM from 'react-dom';
import '@styles/reset.css';
import { App, AppErrorBoundary } from '@components/global';
import { Home } from '@pages';

ReactDOM.render(
  <React.StrictMode>
    <AppErrorBoundary>
      <App>
        <Home />
      </App>
    </AppErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);