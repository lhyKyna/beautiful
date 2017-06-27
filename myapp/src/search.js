import React, { Component } from 'react';
import './IndexHeader.css';
import { SearchBar, Button, WhiteSpace, WingBlank, Icon, Grid, Flex, NavBar} from 'antd-mobile';

class Search extends React.Component {
  state = {
    value: '',
    focused: true,
  };
  onChange= (value) => {
    // console.log(value, 'onChange');
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  render() {
    return (<div className="header">
      <Icon type="" style={{ fontSize: 16, color: '#08c' }} />
      <SearchBar
        value={this.state.value}
        placeholder="搜索"
        onSubmit={value => console.log(value, 'onSubmit')}
        onClear={value => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onCancel={() => console.log('onCancel')}
        onChange={this.onChange}
      />
      <Icon type="" style={{ fontSize: 16, color: '#08c' }} />
    </div>);
  }
}

export default Search;

