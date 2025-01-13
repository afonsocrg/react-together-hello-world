import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactTogether } from 'react-together';
import { HelpDialog } from './components';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactTogether
      sessionParams={{
        // Feel free to use your API key.
        // You can get your free API Key at multisynq.io/account
        apiKey: '2AJVvYv9BX57sQFNQyzvmuuUyabBS9NAF7zz7az0sA',
        appId: 'dev.reacttogether.stackblitz.hello',
        name: 'stackblitz-hello',
        password: 'kind-of-secret',
      }}
    >
      <App />
      <HelpDialog />
    </ReactTogether>
  </StrictMode>
);
