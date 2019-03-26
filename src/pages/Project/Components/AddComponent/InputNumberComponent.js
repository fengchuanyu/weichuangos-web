import React, { Component } from 'react';
import { Input } from 'antd';
export default class InputNameComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numTest: '',
    };
  }

  inputNum(value) {
    console.log(value);
  }

  render() {
    return (
      <div style={{ marginLeft: 25.4 + '%', marginBottom: 15 }}>
        项目编号：
        <Input placeholder="请输入项目编号" style={{ width: 467 }} onChange={this.inputNum} />
      </div>
    );
  }
}
