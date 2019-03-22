/*
 * @Author: Why-WU
 * @LastEditors: Why-WU
 * @Description: 这是OA员工管理中“增加/删除”的表单组件
 * @Date: 2019-03-19 22:48:25
 * @LastEditTime: 2019-03-22 10:21:11
 */

import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import React, { Component } from 'react';
import { InputNumber } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import HomeAdd from '@/pages/Worker/Components/HomeAdd/HomeAdd'; //家庭住址
import JobSelection from '@/pages/Worker/Components/JobSelection/JobSelection'; //岗位选择
import Departments from '../Departments/Departments'; //部门
import PhotoUpload from '@/pages/Worker/Components/PhotoUpload/PhotoUpload';
import { relative } from 'path';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

//出生日期
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';

const sex = [
  {
    value: '男',
    label: '男',
  },
  {
    value: '女',
    label: '女',
  },
];

class FormList extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const InputGroup = Input.Group;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="姓名">
          {getFieldDecorator('name', {
            rules: [
              {
                message: '请输入您的姓名！',
              },
            ],
          })(<Input style={{ width: '30%' }} />)}
        </Form.Item>

        <Form.Item style={{ position: 'absolute', top: 20 + '%', left: 80 + '%' }}>
          <PhotoUpload/>
          (照片大小不能超过200M)
        </Form.Item>

        <Form.Item label="性别">
          <Cascader style={{ width: '30%' }} options={sex} placeholder="性别" />
        </Form.Item>
        <Form.Item label="年龄">
          <InputNumber min={1} max={100} />
        </Form.Item>

        <Form.Item label="岗位">
          {getFieldDecorator('job', {
            rules: [
              {
                type: 'array',
                message: '请选择您的岗位',
              },
            ],
          })(<JobSelection />)}
        </Form.Item>

        <Form.Item label="身份证号">
          {getFieldDecorator('card', {
            rules: [
              {
                pattern: new RegExp(
                  /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
                ),
                message: '请输入正确的身份证号码',
              },
            ],
          })(<Input placeholder="请输入身份证号码" style={{ width: '30%' }} />)}
        </Form.Item>

        <Form.Item label="出生日期">
          {getFieldDecorator('data', {
            rules: [
              {
                message: '请选择您的出生日期',
              },
            ],
          })(
            <div>
              <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
            </div>
          )}
        </Form.Item>

        <Form.Item
          label={
            <span>
              家庭住址&nbsp;
              <Tooltip title="详细到门牌号">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('homeadd', {
            rules: [
              {
                type: 'array',
                message: '请填写您的家庭住址',
                whitespace: true,
              },
            ],
          })(<HomeAdd />)}
        </Form.Item>

        <Form.Item label="隶属部门">
          {getFieldDecorator('departments', {
            rules: [
              {
                message: '请选择您的部门',
              },
            ],
          })(<Departments />)}
        </Form.Item>

        <Form.Item label="员工编号">
          <Number />
        </Form.Item>

        <Form.Item label="入职时间">
          {getFieldDecorator('come', {
            rules: [
              {
                message: '请选择您的入职日期',
              },
            ],
          })(
            <div>
              <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
            </div>
          )}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            完成
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(FormList);

export default WrappedRegistrationForm;
