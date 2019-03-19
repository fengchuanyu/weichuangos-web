import React, { Component } from 'react'
import { Input } from 'antd';
export default class InputNameComponent extends Component {
  render() {
    return (
      <div>
        <Input placeholder="给目标起个名字" />
      </div>
    )
  }
}
