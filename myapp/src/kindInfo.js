import React, { Component } from 'react';
import { RefreshControl, ListView,Grid} from 'antd-mobile';
import fetchJsonp from 'fetch-jsonp'



class KindInfo extends Component {
   state = {
    initialHeight: false,
    data: [''],
    data1: [''],
    tit:"",
    tit1:"",
    flag:false
  }
   componentDidMount() {
    // simulate img loading
    var id = this.props.params.id;
    console.log(id)
      setTimeout( () => {
      	var data = '';
        var data1=""
	      fetchJsonp('https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&'+id)
	      .then((response) => {
	        return response.json()
	      }).then((json) => {
          console.log(json)
        if(json.value.category_2){
	        data = Array.from(json.value.category_1.list).map((_val, i) => ({
					  icon:_val.image,
					  text: _val.title,
					}));
          data1 = Array.from(json.value.category_2.list).map((_val, i) => ({
            icon:_val.image,
            text: _val.title,
          }));
            this.setState({
           data1: data1,
           data:data,
           tit: json.value.category_1.info.title,
           tit1: json.value.category_2.info.title,
           flag:true
          });
        }else{
             data = Array.from(json.value.category_1.list).map((_val, i) => ({
            icon:_val.image,
            text: _val.title,
          }));
             this.setState({
           
           data:data,
           tit: json.value.category_1.info.title,
           flag:false
          });
          }
	        
	      }).catch((ex) => {
	        console.log('parsing failed', ex)
	      })
	      
      },100)
  }
  handleClick(event){
  	console.log(event);

  }
  render() {
  	console.log(this.state.flag)
    var hide = this.state.flag?"block":"none";
    return (
      <div className="Glist">
      <div className="sub-title"><span>{this.state.tit}</span></div>
	    <Grid data={this.state.data} onClick={this.handleClick} />
      <div style={{display:hide}}>      
      <div className="sub-title"><span>{this.state.tit1}</span></div>
      <Grid data={this.state.data1} onClick={this.handleClick} />
      </div>

      

	  </div>
    );
  }
}


export default KindInfo
