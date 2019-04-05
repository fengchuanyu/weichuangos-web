import React, { Component } from 'react';
import { Input } from 'antd';
import { relative } from 'path';

export default class InputNameComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: '',
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      projectName:nextProps.ReviseInputName,
    })
  }

  getProjectName = (event) => {
    console.log(event.target.value)
    this.setState({
      projectName:event.target.value
    },()=>{
      this.props.TransmitInputName(this.state.projectName)
    })
  }

  render() {
    return (
      <div style={{ marginLeft: 25.4 + '%', marginBottom: 15 }}>
        项目名称：
        <Input style={{ width: 467 }} placeholder="给目标起个名字" onChange = {this.getProjectName} value = {this.state.projectName}/>
      </div>
    );
  }
}
