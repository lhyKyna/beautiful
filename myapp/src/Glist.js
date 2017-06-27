import React, { Component } from 'react';
import { RefreshControl, ListView,Grid} from 'antd-mobile';
import fetchJsonp from 'fetch-jsonp'
import './IndexHeader.css';



class Glist extends Component {
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
	        data = Array.from(json.data[13730].list).map((_val, i) => ({
					  icon:_val.image,
					  text: _val.title,
					  id:"/"
					}));
	        this.setState({
	         data: data
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
      <div className="Glist">
	    <Grid data={this.state.data} hasLine={false} onClick={this.handleClick} />
	  </div>
    );
  }
}


export default Glist