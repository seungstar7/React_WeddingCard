import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
console.log("번들링 성공")
root.render(<App />);