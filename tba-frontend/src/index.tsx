import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './page/Homepage';
import Posts from './page/Posts';
import Navbar from './component/Navbar';
import About from './page/About';
import CreatePost from './page/CreatePost';

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
      <Route path='/create' element={<CreatePost />}></Route>
    </Routes>
  </BrowserRouter>
);