import React, { Component } from 'react'
import { Input } from 'antd';



export default class InputNameComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      projectName:''
    }
  } 

  getProjectName = (event) => {
    this.setState({
      projectName:event.target.value
    })
    this.props.TransmitProjectName(this.state.projectName);
    // console.log(this.state.projectName);
  }

  render() {
    return (
      <div>
        <Input 
        value={this.state.projectName}
        style={{ width: 467 }}
        onChange={this.getProjectName}
        placeholder="给目标起个名字" />
      </div>
    )
  }
}
