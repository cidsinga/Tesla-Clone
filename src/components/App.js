import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import './App.css';
import Cars from './Cars'
import { Switch, Route, Router } from 'react-router-dom';
function App() {
  return (
    <div>
<Switch>
<Route exact path='/' component={Header}/>
<Route path='/cars' component={Cars}/>
</Switch>
    </div>
  );
}

export default App;
