import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";

import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyDKgY15afK1wjbMKKS_IXaBfgrJ70DneRQ",
  authDomain: "indumentariasm-98d80.firebaseapp.com",
  projectId: "indumentariasm-98d80",
  storageBucket: "indumentariasm-98d80.appspot.com",
  messagingSenderId: "594523058960",
  appId: "1:594523058960:web:9e5fca0d5a2bae40036b95"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)