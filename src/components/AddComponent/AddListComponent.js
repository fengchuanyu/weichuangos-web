import React, { Component } from 'react';
import { List, Typography } from 'antd';
import { Button } from 'antd';
import { Tag } from 'antd';
import style from './AddList.less'
import {Form, Input} from 'antd';
export default class AddListComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
        list:[],
        isActive:false
    }
}
componentDidMount(){
  this.setState({
    list:this.props.TagList,
  })
}
setActive(){
  this.setState({
    isActive:true
  })
}
backActive(){
  this.setState({
    isActive:false
  })
}
  render() {
    return (
      <div>
    <List
      size="small"
      bordered
      dataSource={this.state.list}
      renderItem={item => (<List.Item>
        <Tag color="#108ee9">{item}</Tag><Button color="#1890ff" onClick={this.setActive.bind(this)}>修改</Button><Button type="danger">删除</Button>
        <div ><Input type="text" defaultValue={item}/><Button color="#1890ff" onClick={this.backActive.bind(this)}>确定</Button></div>
      </List.Item>)}

    />
      </div>
    )
  }
}