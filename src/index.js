import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeView from './views/home';

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeView/>}/>
    </Routes>
    <ToastContainer/>
  </BrowserRouter>
);
  