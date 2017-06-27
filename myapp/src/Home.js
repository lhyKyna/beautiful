import React, { Component } from 'react';
import { RefreshControl, ListView } from 'antd-mobile';
import TabList from './TabList';
import Fashion from './Fashion';
import NewStyle from './NewStyle';
import Choiceness from './Choiceness';

class Home extends Component {
   render() {
   		return(
		<div className="Home">
	      <TabList />

	    </div>
   			)
      
   }
}

export default Home;
