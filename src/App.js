
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const triggerMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'White';
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#0a5d6e';
    }
  };
  return (

    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} triggerMode={triggerMode} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<TextForm heading="Enter your Text here" mode={mode} />}/>

          </Routes>

        </div>
      </Router>

    </>
  );

}

export default App;
