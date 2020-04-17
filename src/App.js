import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  //Problem 1: pushing the footer to the bottom of the page
  // - installed FlexView, a type of Flexbox package for react
  // - Made a HeaderContainer class in css file. Isn't working
  // - [HERE] attempted to implement a flexbox around the components but was unsucessful
  // + keep reading the FlexView page to try and understand it so that you can implement it
  // + IF you can't implement it, consider using another flexbox package
  return (
    <div column>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
