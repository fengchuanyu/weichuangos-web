import React, { Component } from 'react'
import { Select } from 'antd';
import AddComponent from '@/components/AddComponent/AddComponent'
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
      <span>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="微信小程序"
          optionFilterProp="children"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <Option value="jack">微信小程序</Option>
          <Option value="lucy">移动端开发</Option>
          <Option value="tom">Vue</Option>
        </Select>
        <AddComponent/>
      </span>
    )
  }
}
