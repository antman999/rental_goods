import React from 'react';
import Homepage from './pages/homepages/Homepage';
import { Route } from 'react-router-dom'
import Shop from './pages/shop/Shop'
import './App.css'
import Header from './components/header/Header';


function App() {
  return (
    <div>
      <Header />
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop' component={Shop}/> 
    </div>
  );
}

export default App;
