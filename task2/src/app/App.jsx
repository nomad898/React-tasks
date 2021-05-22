import { AppErrorBoundary } from '@components/global';
import { Home } from '@pages';
import '@styles/style.scss'

const App = () => (
    <AppErrorBoundary>
      <Home />
    </AppErrorBoundary>
);

export { App };