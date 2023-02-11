import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Posts from './pages/Posts';
import Navbar from './component/Navbar';
import About from './pages/About';
import Create from './pages/Create';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/posts' element={<Posts />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/create' element={<Create />}></Route>
    </Routes>
  </BrowserRouter>
);