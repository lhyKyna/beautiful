import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import Home from './Home'
import Kind from './kind'
import KindInfo from './kindInfo'

ReactDOM.render(
	<Router history={browserHistory}>
	   <Route path="/" component={App}>
	   	<IndexRoute component={Home}/>
	   	<Route path="Home" component={Home}/>
	   	<Route path="kind" component={Kind}/>
	   	<Route path="/kindInfo/:id" component={KindInfo}/>
	   	

	   </Route>
	</Router>
  , document.getElementById('root'));
registerServiceWorker();
