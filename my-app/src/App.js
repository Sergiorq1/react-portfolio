import React from 'react';
import Navbar from './components/Navbar'
import { 
  Routes, 
  Route,
  Link,
  BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Background from './components/pages/Background';
import Footer from './components/Footer';

function App() {

  return (
    <div className="app">
        <Navbar/>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/background' element={<Background/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}
export default App;
