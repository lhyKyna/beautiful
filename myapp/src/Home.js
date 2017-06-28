import React, { Component } from 'react';
import { RefreshControl, ListView } from 'antd-mobile';
import Search from './search'
import Swiper from './Swiper'
import Glist from './Glist'
import Time from './time'      
import TabList from './TabList';
import Fashion from './Fashion';
import NewStyle from './NewStyle';
import Choiceness from './Choiceness';
import IndexMidele from './IndexMidele'
class Home extends Component {
   render() {
   		return(
		<div className="main">
		      <Swiper />
		      <Glist />
		      <Time />
		      <IndexMidele />
		      <TabList />
	    </div>
   			)
      
   }
}

export default Home;
