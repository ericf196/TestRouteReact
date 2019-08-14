import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Home from './components/Home';
import Profile from './components/Profile';
import DetailProfile from './components/DetailProfile';
import DetailCreate from './components/DetailCreate';

import { BrowserRouter as Router, Route, Link, Switch, HashRouter } from 'react-router-dom'


const routing = (
		
	  <Router>
	  	<ul>
	        <li>
	          <Link to="/">PRINCIPAL</Link>
	        </li>
	        <li>
	          <Link to="/home">Home</Link>
	        </li>
	        <li>
	          <Link to="/profile">Profile</Link>
	        </li>
	         <li>
	         <Link to="/profile/detail">Detail</Link>
	         </li>
	         <li>
	         <Link to="/profile/detail/create">Create</Link>
	         </li>
	    </ul>
		 
	          <Switch>
		        <Route exact  path="/" component={App} />
		        <Route path="/home" component={Home} />
		        <Route exact path="/profile" component={Profile} />
		        <Route exact path="/profile/detail"  component={DetailProfile} />
		        <Route  path="/profile/detail/create"  component={DetailCreate} />
		      </Switch>
	      
	  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
