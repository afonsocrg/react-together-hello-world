import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactTogether } from 'react-together';
import App from './App.tsx';
import { Layout } from './components/Layout.tsx';

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
      <Layout>
        <App />
      </Layout>
    </ReactTogether>
  </StrictMode>
);
