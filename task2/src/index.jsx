import ReactDOM from 'react-dom'
import '@styles/reset.css'
import { App } from './App'
import { AppErrorBoundary } from '@components/AppErrorBoundary/AppErrorBoundary';

ReactDOM.render(
  <AppErrorBoundary>
    <App />
  </AppErrorBoundary>,
  document.getElementById('root')
);