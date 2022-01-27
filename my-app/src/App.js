import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact/>
        </Routes>

      </Router>
      <h1>Hi b </h1>
      
      
    </>
  );
}

export default App;
