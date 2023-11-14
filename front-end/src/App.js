
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import ProductCards from './glassmorphism/ProductCards'
import UploadFile from './UploadFile'
import NavBar from './components/NavBar'
import ShoppingCart from './components/ShoppingCart'
import Header from './NavbarComponent/Header'

import VideoBackground from './components/VideoBackground'

import LoginPage from "./pages/Auth/LoginPage";
import Categorytest from "./Adminside/pages/category/categorytest";
import UserLoginForm from "./UserComponent/UserLoginForm";
import UserRegister from "./UserComponent/UserRegister";



function App() {
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
            <Route path="/" element={<LoginPage/>} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/category" element={<Category/>} />
              <Route path="/allorder" element={<Allorders/>} />
              <Route path="/allproduct" element={<Allproduct/>} />          
              <Route path="/allseller" element={<Allseller/>} />          
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/line" element={<Line />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );

}

export default App;
