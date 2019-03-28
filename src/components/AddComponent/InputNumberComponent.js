import React, { Component } from 'react'
import { Input } from 'antd';
export default class InputNameComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      getProjectNumber:''
    }
  }

  inputNum = (event) => {
    this.setState({
      getProjectNumber:event.target.value
    })
    this.props.TransmitProjectNumber(this.state.getProjectNumber); 
  };

  
  render() {
    
    return (
      <div>
        <Input placeholder="请输入项目编号"
        value={this.state.getProjectNumber}
        style={{ width: 467 }}
        onChange = {this.inputNum}
        />
      </div>
    )
  }
}
