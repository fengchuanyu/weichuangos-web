import React, { Component } from 'react'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

export default class TabComponent extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Tab 1" key="1" >{({ style }) => (
      <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
    )}Content of Tab Pane 1</TabPane>
    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>

  </Tabs>,
      </div>
    )
  }
}
