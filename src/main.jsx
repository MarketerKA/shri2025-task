import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header';
import { Main } from './components/Main';
import './styles.css';
import './reset.css';

ReactDOM.createRoot(document.getElementById('app')).render(
    <>
    <Header />
    <Main />
    </>
);