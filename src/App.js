import React from 'react';
// import './App.css';

import Form from './components/From'
import Card from './components/Card'
import { useDispatch, useSelector } from 'react-redux'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const dispatch = useDispatch()
  const localdata = JSON.parse(localStorage.getItem('from_data'))
  // console.log(localdata)
  if(localdata){
    dispatch({ type: 'FORM_DATA', payload: localdata })
  }

  return (
   
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link">Form</Link></li>
              <li><Link to={'/card'} className="nav-link">Card</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/' component={Form} />
            <Route exact path='/card' component={Card} />
          </Switch>
        </div>
      </Router>
   
  );
}

export default App;



