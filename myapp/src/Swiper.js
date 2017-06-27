import React, { Component } from 'react';
import { NavBar, Icon ,Carousel } from 'antd-mobile';
import './IndexHeader.css';
import fetchJsonp from 'fetch-jsonp'




class Swiper extends Component {
   state = {
    initialHeight: false,
    data: ['']
  }
   componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      var data = '';
      fetchJsonp('/jsonp/multiget/3?pids=5868%2C6348%2C20114%2C13730%2C42287')
      .then((response) => {
        return response.json()
      }).then((json) => {
        data = json.data[20114].list;
        data = Array.prototype.slice.call(data);
        this.setState({
         data: data
        });
      }).catch((ex) => {
        console.log('parsing failed', ex)
      })
      
    }, 100);
  }
  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
      <div className="IndexHeader">
         <Carousel
          className="my-carousel"
          autoplay={false}
          infinite
          selectedIndex={1}
          swipeSpeed={35}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map((item,index) => (
            <a href="javascript:;" key={index} style={hProp}>
              <img
                src={item.image}
                alt="icon"
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Swiper;
