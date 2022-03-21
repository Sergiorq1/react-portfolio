import React from 'react';
import Navbar from './components/Navbar'
import { 
  BrowserRouter, 
  Routes, 
  Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Background from './components/pages/Background';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/background' element={<Background/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  
    </>
  );
}

export default App;
