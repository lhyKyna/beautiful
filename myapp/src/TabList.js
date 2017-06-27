import React, { Component, PropTypes } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import Fashion from './Fashion';
import NewStyle from './NewStyle';
import Choiceness from './Choiceness';
import "./TabList.css"

const TabPane = Tabs.TabPane;

function callback(key) {}
function handleTabClick(key) {}

const TabList = () => (
  <div>
    <WhiteSpace />
    <Tabs defaultActiveKey="1" animated={false} onChange={callback} onTabClick={handleTabClick}>
      <TabPane tab="流行" key="1">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#fff' }}>
           <Fashion />
        </div>
      </TabPane>
      <TabPane tab="新款" key="2">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#fff' }}>
           <NewStyle />
        </div>
      </TabPane>
      <TabPane tab="精选" key="3">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#fff' }}>
           <Choiceness />
        </div>
      </TabPane>
    </Tabs>
    <WhiteSpace />
  </div>
);

export default TabList;