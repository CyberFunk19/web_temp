import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { Outlet, Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './components/Login';
import About from './components/About';
import { Reg } from './components/Reg';
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} >
                        <Route path="/about" element={<About/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/register" element={<Reg/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

