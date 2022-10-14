import React from 'react';
import Registration from './pages/registration/index'
import Visualization from './pages/visualization/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { Routes, Route } from "react-router-dom";

import { Store } from './context/store/index';
import Loading from './components/pages/loading';
import ToastAlert from './components/ui/toast/index';
import Header from './components/ui/header';
import Home from './pages/home';

function App() {
  return (
    <Store>
      <Header/>
      <div className='body-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/songs" element={<Visualization />} />
        </Routes>
      </div>
      <Loading />
      <ToastAlert />
    </Store>
  );
}

export default App;