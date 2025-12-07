import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // you already imported this
import './index.css';
import App from './App.jsx';
import { TodoProvider } from './context/TodoContext';

const root = createRoot(document.getElementById('root')); // <-- use createRoot directly
root.render(
  <StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>
);


