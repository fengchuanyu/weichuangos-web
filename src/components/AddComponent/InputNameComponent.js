import React, { Component } from 'react'
import { Input } from 'antd';
import { relative } from 'path';



export default class InputNameComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      test:''
    }
  }

  render() {
    return (
      <div style={{ marginLeft:25.4+'%',marginBottom:15 }}>
        项目名称：
        <Input 
        style={{ width: 467  }}
        placeholder="给目标起个名字" />
      </div>
    )
  }
}
