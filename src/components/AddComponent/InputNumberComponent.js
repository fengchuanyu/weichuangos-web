import React, { Component } from 'react'
import { Input } from 'antd';
export default class InputNameComponent extends Component {
  render() {
    return (
      <div>
        <Input placeholder="请输入项目编号"
        style={{ width: 467 }}
          />
      </div>
    )
  }
}
