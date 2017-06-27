import React, { Component } from 'react';
import { RefreshControl, ListView } from 'antd-mobile';
import Search from './search'
import Swiper from './Swiper'
import Glist from './Glist'
import Time from './time'



class Home extends Component {
   render() {
   		return(
		<div className="Home" style={{paddingBottom:'2rem'}}>
	      <Search />
	      <Swiper />
	      <Glist />
	      <Time />
	    </div>
   			)
      
   }
}

export default Home;
