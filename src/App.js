import React from 'react';
import Homepage from './pages/homepages/Homepage';
import { Route } from 'react-router-dom'
import Shop from './pages/shop/Shop'


function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop' component={Shop}/> 
    </div>
  );
}

export default App;
