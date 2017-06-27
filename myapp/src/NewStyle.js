import React, { Component } from 'react';
import { RefreshControl, ListView } from 'antd-mobile';
import fetchJsonp from 'fetch-jsonp'
import Production from "./components/ProductList"

class Fashion extends Component {
	state = {
		listData:[]
	}
	 componentDidMount() {

		//获取商品列表的数据
	    fetchJsonp('http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=9e156aa4-285b-4b34-9c09-382d3bf56259&sort=new&_=1498471408222')
	    .then(res=>res.json()).then(data=>{
	        console.log(data)
	        //保存在state里面
	        this.setState({
	            listData:data.data.list
	        })
	    })
	  }
   render() {
   		return(
   			<Production listData={this.state.listData}/>
   		)
   }
}

export default Fashion;
