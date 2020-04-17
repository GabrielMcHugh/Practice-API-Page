import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FlexView from 'react-flexview';
import './App.css';

function App() {
  return (
    <FlexView column hAlignContent='center'>
      <div className = 'HeaderContainer' ><Header/></div>
      <FlexView><Footer/></FlexView>
    </FlexView>
  );
}

export default App;
