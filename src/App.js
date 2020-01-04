import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Privacy from "./pages/Privacy"
import Imprint from "./pages/Imprint"
import Home from './pages/Home.js';


function App() {


  return (
    <div className="App">
   <Router>
    <Switch>
     <Route exact path='/pacticemill' component={Home}></Route>
      <Route exact path='/imprint' component={Imprint}></Route>
      <Route exact path='/privacy' component={Privacy}></Route>
    </Switch>
    </Router>
    </div>
     
  );
}

export default App;
