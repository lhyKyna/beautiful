import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';
import Home from './Home'

ReactDOM.render(
	<Router history={hashHistory}>
	   <Route path="/" component={App}>
	   	<IndexRoute component={Home}/>
	   	<Route path="home" component={Home}/>
	   </Route>
	</Router>
  , document.getElementById('root'));
registerServiceWorker();
