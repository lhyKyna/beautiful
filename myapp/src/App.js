import React, { Component } from 'react';
import { NavBar, Icon ,Carousel ,TabBar} from 'antd-mobile';
// import $ from 'jquery'
import fetchJsonp from 'fetch-jsonp'
import {Link} from 'react-router';
import './App.css';

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
    };
  }
   componentDidMount() {
   //  // simulate img loading
   //  setTimeout(() => {
   //    this.setState({
   //      data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
   //    });
   //  }, 100);
    // $.ajax({
    // 		url: 'http://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C20114%2C13730%2C42287&callback',
    // 		type: 'post',
    // 		dataType:"jsonp",
    // 		data: {},
    // 		success: function (data) {
    // 			console.log(data)
    // 		}
    // 	});
    var url = "http://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C20114%2C13730%2C42287&callback"
    fetchJsonp(url)
	  .then(function(response) {
	    return response.json()
	  }).then(function(json) {
	    //console.log(json)
	  }).catch(function(ex) {
	   // console.log('parsing failed', ex)
	  })
 //    fetch("/jsonp/multiget/3?pids=5868%2C6348%2C20114%2C13730%2C42287&callback=jsonp5868_6348_20114_13730_42287",{ dataType: "jsonp"})
 //    .then(function(res){
 //    	eval(res)
 //    })
 //    .then(data=>{
 //    console.log(data)
	// })
  }

  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
      <div className="App">
         {this.props.children}
             <TabBar
        unselectedTintColor="#949494"
        tintColor="#ff7a9a"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="首页"
          key="首页"
          icon={<Link to="/home"><div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(https://s10.mogucdn.com/p2/160802/upload_439ak5453ih43h5d2a109dhe71agg_36x39.png) center center /  0.42rem 0.42rem no-repeat' }}
          /></Link>
          }
          selectedIcon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
           background: 'url(https://s10.mogucdn.com/p2/160802/upload_29e515a6k59k937a3ej3l5e6bfji2_36x39.png) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}
          data-seed="logId"
        > 
        </TabBar.Item>
       <TabBar.Item
           icon={<Link to="/kind"><div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(https://s10.mogucdn.com/p2/160802/upload_3egkhdd8460el241d98kcl706ke65_34x34.png) center center /  0.42rem 0.42rem no-repeat' }}
          /></Link>
          }
          selectedIcon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(https://s10.mogucdn.com/p2/160802/upload_488lbkj7ll3e92bg3ld1kh5k73l87_34x34.png) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          title="分类"
          key="分类"
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
            });
          }}
          data-seed="logId1"
        >
        </TabBar.Item>
        <TabBar.Item
          icon={<Link to="/home"><div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://s10.mogucdn.com/p2/160802/upload_0eabagglh39aggl8jihfakfbf70a9_40x38.png) center center /  0.42rem 0.42rem no-repeat' }}
            /></Link>
          }
          selectedIcon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(http://s17.mogucdn.com/p2/160802/upload_565i382k0hi45ek6chhj5603d41a8_40x38.png) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          title="购物车"
          key="购物车"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
            });
          }}
        >
        </TabBar.Item>
        <TabBar.Item
          icon={<Link to="/home"><div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(https://s10.mogucdn.com/p2/160802/upload_5g85l55d280l94lfg678lcleegf5e_38x38.png) center center /  0.42rem 0.42rem no-repeat' }}
          /></Link>
          }
          selectedIcon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(http://s17.mogucdn.com/p1/160811/idid_ifqtkztcgjstazrumezdambqgyyde_38x38.png) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          title="我"
          key="我"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
            });
          }}
        >
        </TabBar.Item>
      </TabBar>
      </div>
    );
  }
}

export default App;
