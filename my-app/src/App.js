import React, {useState} from 'react';
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
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <p>{!data ? "Loading..." : data}</p>
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
