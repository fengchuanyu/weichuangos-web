import React, { Component } from 'react'
import { Input } from 'antd';



export default class InputNameComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      test:''
    }
  }

  render() {
    return (

      <div>
        <Input 
        style={{ width: 467 }}
        placeholder="给目标起个名字" />
      </div>
    )
  }
}
