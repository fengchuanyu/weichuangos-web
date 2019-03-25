import React, { Component } from 'react'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import FormItemComponent from '@/components/ListComponent/FormItemComponent';
import styles from './TabComponent.less';


export default class TabComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      active:styles.active,
      none:styles.none,
     
  }
  }
  click(key){
    if(key==1){
      this.setState({
        active:styles.active,
        none:styles.none
      })
    }else{
      this.setState({
        active:styles.none,
        none:styles.active
      })
    }
  }
  render() {
    return (
      <div>
        <div style={{marginLeft:45+"%"}}>
          <span className={this.state.active} >进行中</span>
          /
          <span className={this.state.none}>仓库</span>
        </div>
        <div>
          <Tabs defaultActiveKey="1"  onTabClick={this.click.bind(this)}>
          <TabPane tab="                           进行中的任务" key="1" ><FormItemComponent/></TabPane>
          <TabPane tab="仓库中的任务" key="2">Content of Tab Pane 2</TabPane>
          </Tabs>
        </div>
        
      </div>
    )
  }
}
