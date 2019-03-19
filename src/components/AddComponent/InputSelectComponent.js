import React, { Component } from 'react'
import { Select } from 'antd';
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

export default class InputSelectComponent extends Component {
  render() {
    return (
      <div>
        <Select
    showSearch
    style={{ width: 200 }}
    placeholder="1类"
    optionFilterProp="children"
    onChange={handleChange}
    onFocus={handleFocus}
    onBlur={handleBlur}
    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >
    <Option value="jack">1类</Option>
    <Option value="lucy">2类</Option>
    <Option value="tom">3类</Option>
  </Select>
      </div>
    )
  }
}
