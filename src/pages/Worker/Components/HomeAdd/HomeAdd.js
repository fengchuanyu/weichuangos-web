/*
 * @Author: Why-WU
 * @LastEditors: Why-WU
 * @Description: OA员工列表中“增加/删除”中家庭住址组件
 * @Date: 2019-03-20 13:46:31
 * @LastEditTime: 2019-03-20 15:14:08
 */


import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';
import React, { Component } from 'react';

const InputGroup = Input.Group;
const Option = Select.Option;

const options = [
  {
    value: '北京',
    label: '北京',
    children: [
      {
        value: '北京',
        label: '北京',
        children: [
          {
            value: '东城区',
            label: '东城区',
          },
          {
            value: '西城区',
            label: '西城区',
          },
          {
            value: '海淀区',
            label: '海淀区',
          },
        ],
      },
    ],
  },
  {
    value: '黑龙江省',
    label: '黑龙江省',
    children: [
      {
        value: '哈尔滨市',
        label: '哈尔滨市',
        children: [
          {
            value: '香坊区',
            label: '香坊区',
          },
          {
            value: '南岗区',
            label: '南岗区',
          },
          {
            value: '松北区',
            label: '松北区',
          },
        ],
      },
      {
        value: '大庆市',
        label: '大庆市',
        children: [
          {
            value: '让胡路区',
            label: '让胡路区',
          },
          {
            value: '萨尔图区',
            label: '萨尔图区',
          },
        ],
      },
    ],
  },
  {
    value: '河北省',
    label: '河北省',
    children: [
      {
        value: '石家庄市',
        label: '石家庄市',
        children: [
          {
            value: '新华区',
            label: '新华区',
          },
          {
            value: '长江区',
            label: '长江区',
          },
          {
            value: '桥西区',
            label: '桥西区',
          },
        ],
      },
      {
        value: '保定市',
        label: '保定市',
        children: [
          {
            value: '徐水',
            label: '徐水',
          },
          {
            value: '满城',
            label: '满城',
          },
          {
            value: '清苑',
            label: '清苑',
          },
        ],
      },
    ],
  },
];

class HomeAdd extends React.Component {
  render() {
    return (
      <div>
        <InputGroup compact>
          <Cascader style={{ width: '40%' }} options={options} placeholder="选择行政区划" />
          <Input style={{ width: '50%' }} defaultValue="" />
        </InputGroup>
        <br />
      </div>
    );
  }
}

export default HomeAdd;
