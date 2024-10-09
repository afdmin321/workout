import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { hydrate } from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoudary';
import { StoreProvider } from 'app/providers/StoreProvider';

const rootElement = document.getElementById('root') as HTMLElement;
const root = hydrateRoot(rootElement!, <App />);

root.render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>,
);
// }
