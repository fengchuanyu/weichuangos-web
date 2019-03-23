import React, { Component } from 'react'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import FormItemComponent from '@/components/ListComponent/FormItemComponent';

function callback(key) {
  console.log(key);
}

export default class TabComponent extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="进行中的任务" key="1">
          <FormItemComponent/>
          </TabPane>
          <TabPane tab="仓库中的任务" key="2">Content of Tab Pane 2</TabPane>
        </Tabs>
      </div>
    )
  }
}
