import './App.css';
import React, { useState, useEffect} from 'react';
import Main from "./components/Main";
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Overview,User,Miner} from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import {Team} from './pages/Team';
import {Support} from './pages/Support';
import {Products} from './pages/Products';
import Navbar from "./components/Navbar";


function App() {
  useEffect(()=>{
    document.title="Blockchainonyx";
  })
  return (
    
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/overview/user' exact component={User}/>
        <Route path='/overview/miner' exact component={Miner}/>
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/team' exact component={Team} />
        <Route path='/support' exact component={Support} />
        <Route path='/products' exact component={Products} />
      </Switch>
    
    
    </Router>
  );
}

export default App;