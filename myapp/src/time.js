import React, { Component } from 'react';
import { RefreshControl, ListView,Grid, Button} from 'antd-mobile';
import fetchJsonp from 'fetch-jsonp'
import './IndexHeader.css';



class Time extends Component {
   state = {
    initialHeight: false,
    data: ['']
  }
   componentDidMount() {
    // simulate img loading
      setTimeout( () => {
      	var data = '';
	      fetchJsonp('/jsonp/multiget/3?pids=5868%2C6348%2C20114%2C13730%2C42287')
	      .then((response) => {
	        return response.json()
	      }).then((json) => {
          console.log(json)
	        this.setState({
	         data: json.data[42287].list
	        });
	      }).catch((ex) => {
	        console.log('parsing failed', ex)
	      })
	      
      },100)
  }
  handleClick(event){
  	console.log(event.id);

  }
  render() {
  	console.log(this.state.data)
    return (
      <div className="Time">
	    <div>
        <ul>
          {
            this.state.data.map((item,index)=>{
              return (
                <li key={index}>
                  <img src={item.image} />
                  <div style={{overflow:'hidden'}}>
                      <span style={{float:'left',color:'red',fontSize:'0.1rem'}}>￥{item.price}</span>
                      <span style={{float:'right',fontSize:'0.1rem',color:'#ccc'}}>{item.discountPrice}</span>
                  </div>
                  <button className="btn">立即购买</button>
                </li>
                )
            })
          }
        </ul>
      </div>
	  </div>
    );
  }
}


export default Time