import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/Login' Component={Login}/>
          <Route path='/Register' Component={Register}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
