import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import MyPets from './pages/MyPets/MyPets';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/Login' Component={Login}/>
          <Route path='/Register' Component={Register}/>
          <Route path='/Forgotten_password' Component={ForgotPassword}/>
          <Route path='/MyPets' Component={MyPets}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
