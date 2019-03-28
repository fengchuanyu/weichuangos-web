import React, { Component } from 'react';
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
  constructor(props) {
    super(props);
    this.state = {
      option: [],
    };
  }
  componentDidMount() {
    this.setState({
      option: this.props.newValues,
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      option: nextProps.newValues,
    });
  }

  render() {
    const children = [];
    for (let i = 0; i < this.state.option.length; i++) {
      children.push(<Option key={i.toString(36) + i}>{this.state.option[i].title}</Option>);
    }

    return (
      <span>
        <Select
          showSearch
          style={{ width: 380 }}
          placeholder="微信小程序"
          optionFilterProp="children"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {children}
        </Select>
      </span>
    );
  }
}
