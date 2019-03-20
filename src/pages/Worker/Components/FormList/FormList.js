/*
 * @Author: Why-WU
 * @LastEditors: Why-WU
 * @Description: 这是OA员工管理中“增加/删除”的表单组件
 * @Date: 2019-03-19 22:48:25
 * @LastEditTime: 2019-03-20 16:54:00
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
import Departments from '../Departments/Departments';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

//出生日期
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';

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

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  /* compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }; */

  /* validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }; */

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="姓名">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '请输入您的姓名！',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="性别">
          {getFieldDecorator('sex', {
            rules: [
              {
                required: true,
                message: '请输入您的性别',
              },
              /* {
                validator: this.validateToNextPassword,
              }, */
            ],
          })(<Input type="sex" />)}
        </Form.Item>
        <Form.Item label="年龄">
          {getFieldDecorator('age', {
            rules: [
              {
                required: true,
                message: '请选择您的年龄',
              },
            ],
          })(<InputNumber min={1} max={100} />) //年龄控制大于1小于100
          }
        </Form.Item>

        <Form.Item label="岗位">
          {getFieldDecorator('job', {
            rules: [
              {
                required: true,
                message: '请选择您的岗位',
              },
            ],
          })(<JobSelection />)}
        </Form.Item>

        {/* <Form.Item label="Confirm Password">
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
        </Form.Item> */}
        {/* <Form.Item
          label={
            <span>
              Nickname&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(<Input />)}
        </Form.Item> */}
        <Form.Item label="身份证号">
          {getFieldDecorator('card', {
            rules: [
              {
                required: true,
                message: '请输入您的身份证号码',
              },
            ],
          })(<Input type="card" />)}
        </Form.Item>
        {/* <Form.Item label="年龄">
          {getFieldDecorator('age', {
            rules: [
              {
                required: true,
                message: '请选择您的年龄',
              },
            ],
          })(<Input type="card" />)}
        </Form.Item> */}

        {/*  <Form.Item label="Habitual Residence">
          {getFieldDecorator('residence', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [
              { type: 'array', required: true, message: 'Please select your habitual residence!' },
            ],
          })(<Cascader options={residences} />)}
        </Form.Item> */}
        <Form.Item label="出生日期">
          {getFieldDecorator('data', {
            rules: [
              {
                required: true,
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
                required: true,
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
                required: true,
                message: '请选择您的部门',
              },
            ],
          })(<Departments />)}
        </Form.Item>

        <Form.Item label="员工编号">
          <Number />
        </Form.Item>

        <Form.Item label="Phone Number">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="Website">
          {getFieldDecorator('website', {
            rules: [{ required: true, message: 'Please input website!' }],
          })(
            <AutoComplete
              dataSource={websiteOptions}
              onChange={this.handleWebsiteChange}
              placeholder="website"
            >
              <Input />
            </AutoComplete>
          )}
        </Form.Item>
        <Form.Item label="Captcha" extra="We must make sure that your are a human.">
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: 'Please input the captcha you got!' }],
              })(<Input />)}
            </Col>
            <Col span={12}>
              <Button>Get captcha</Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(FormList);

export default WrappedRegistrationForm;
