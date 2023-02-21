import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from '@mui/material';
import { appTheme } from './theme';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
