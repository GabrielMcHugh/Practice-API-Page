import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  //Problem 1: pushing the footer to the bottom of the page
  //
  return (
    <div className = 'container'>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
