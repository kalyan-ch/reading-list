import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BookContextProvider } from './BookContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BookContextProvider>
    <App />
  </BookContextProvider>
);
