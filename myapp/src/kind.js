import React, { Component } from 'react';
import { RefreshControl, ListView,Grid} from 'antd-mobile';
import {Link} from 'react-router';
import './kind.css'
import fetchJsonp from 'fetch-jsonp'
import {browserHistory} from 'react-router';

var data = "";
var url = "https://simba-api.meilishuo.com/venus/mce/v1/urlChange/pc?pid=20783&channel=wap&page=1&pageSize=30&_=1498552608582"
    fetchJsonp(url)
	  .then(function(response) {
	    return response.json()
	  }).then(function(json) {
	  	console.log(json.value)
	   	 data= Array.from(json.value).map((_val, i) => ({
		  icon:_val.image,
		  text: _val.title,
		  id:_val.link
		}));
	  }).catch(function(ex) {
	   console.log('parsing failed', ex)
})
var changePage=(event)=>{
	console.log(event.id)
	var str = event.id.substring(event.id.indexOf('pid'),event.id.indexOf('pid')+9)
	var id = str.split("&")[0]
	console.log(id)
	var path = `/kindInfo/${id}`
	browserHistory.push(path)
}
const Kind = () => (
	<div>
	<div className="sub-title"><span>本周流行</span></div>
	<Grid data={data} onClick={changePage}></Grid>
  </div>
);

export default Kind
