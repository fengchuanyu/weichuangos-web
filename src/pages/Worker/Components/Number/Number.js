/*
 * @Author: Why-WU
 * @LastEditors: Why-WU
 * @Description: 生成员工编号
 * @Date: 2019-03-20 22:54:11
 * @LastEditTime: 2019-03-21 23:53:43
 */


import React, { Component } from 'react';
import { Input } from 'antd';


class Number extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        addNum: ""
      };
      this.makeNume = this.makeNume.bind(this);
    }

    makeNume() {
      console.log(1);
      
      let oNum = Math.ceil(100)
      this.setState = ({
        addNum: oNum
      }),console.log(this.state.addNum);
      console.log(this.state.addNum)
    }

    componentWillUpdate(){
      
      this.makeNume()
    
    }

    render() {
      return (
        <div>
          <input
            type="text"
            onMakeNume={this.makeNume()}
            value={this.state.addNums}
          />
        </div>
      );
    }
  }

export default Number;

