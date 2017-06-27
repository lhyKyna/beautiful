import React, { Component, PropTypes } from 'react';
import "./index.css"

//无状态组件，纯组件
const Production = function(props){
	return (
		<div id="wrapper">
			<ul className="product-list">
				{
					props.listData.map((ele,index)=>{
						return <li key={index}><a>
									<img src={ele.show.img}/>
									<p>{ele.title}</p>
									<div className="goods_info"> <span className="price_info">{ele.price}</span> <span className="fav_num"><em className="start_icon"></em>{ele.cfav}</span> 
									</div></a>
								</li>
					})
				}
			</ul>
		</div>
	)
}

export default Production
// .am-tabs-content .am-tabs-tabpane{height:100vh}