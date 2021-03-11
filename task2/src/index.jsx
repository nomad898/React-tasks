import React from 'react';
import ReactDOM from 'react-dom';
import {
  App,
  AppErrorBoundary,
  Modal
} from '@components/global';
import { Home } from '@pages';

ReactDOM.render(
  <React.StrictMode>
    <AppErrorBoundary>
      <App>
        {/* <Home /> */}
        <Modal />
      </App>
    </AppErrorBoundary>
  </React.StrictMode >,
  document.getElementById('root')
);