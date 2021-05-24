import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@stores';
import { AppErrorBoundary } from './AppErrorBoundary/AppErrorBoundary';
import { AppRouter } from './AppRouter/AppRouter';
import '@styles/style.scss'

const App = () => (
    <React.StrictMode>
        <Provider store={store}>
            <AppErrorBoundary>
                <AppRouter />
            </AppErrorBoundary>
        </Provider>
    </React.StrictMode>
);

export { App };