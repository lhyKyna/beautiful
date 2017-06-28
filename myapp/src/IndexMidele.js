import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'
import './IndexMidele.css'

class IndexMidele extends Component {
	constructor(porps){
		super(porps);
		this.state={
			arr:[],
			str:[]
		}
	}
	componentDidMount() {
		var url = "https://simba-api.meilishuo.com/venus/topic/v2/queryTopicList/h5?"
		fetchJsonp(url)
		  .then(response=>response.json())
		  .then(json=>{
		   // console.log(json.data)
		    this.setState({
		    	arr:json.data,
		    })
		    console.log(this.state.arr)
		  }).catch(ex=>{
		    console.log('parsing failed', ex)
		  })
	}
   render() {
   		return(
			<div className="Home">
			<img src="https://s10.mogucdn.com/mlcdn/c45406/170523_3588j3005fhc2d8f1icgijbgg23gk_740x128.jpg_750x999.v1c7E.70.webp"/>
			{	
				this.state.arr.map((item,index)=>{
		      	return <div key={index}>
		      		<img src={item.image} />
		      		<ul className="list">
		      		{
		      			item.goodsList.map((ele,i)=>{
		      				return <li key={i}>
								<img src={ele.image} />
								<p>{ele.title}</p>
								<p>￥{ele.price}</p>
		      				</li>
		      			})
		      		}
		      		</ul>
		      	</div>
		      })
			}
			<a>查看更过 ></a>
		     </div>
   		)
     
   }
}

export default IndexMidele;
