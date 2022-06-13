import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={new QueryClient}>
    <App /> m
  </QueryClientProvider>
);

