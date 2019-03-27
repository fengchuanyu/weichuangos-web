/*
 * @Author: Why-WU
 * @LastEditors: Why-WU
 * @Description: 生成员工编号
 * @Date: 2019-03-20 22:54:11
 * @LastEditTime: 2019-03-26 12:19:57
 */

import React, { Component } from 'react';
import { Input } from 'antd';

class Number extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addNum: '',
    };
    this.createUUID = this.createUUID.bind(this);
  }

  createUUID(len, radix) {
    var chars = '0123456789'.split('');
    var uuid = [],
      i;
    radix = radix || chars.length;
    if (len) {
      for (i = 0; i < len; i++) {
        uuid[i] = chars[0 | (Math.random() * radix)];
      }
    }
    return uuid.join('');
  }

  change(){
    this.setState({
      addNum:this.createUUID(7,10)
    })
  }

  render() {
    return (
      <div>
        <input type="text" onClick={this.change.bind(this)} value={this.state.addNum} readOnly />
      </div>
    );
  }
}

export default Number;
