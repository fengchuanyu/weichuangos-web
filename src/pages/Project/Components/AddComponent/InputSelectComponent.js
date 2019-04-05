import React, { Component } from 'react';
import { Select } from 'antd';

const Option = Select.Option;



export default class InputSelectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: [],
      proClass:''
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
      proClass: nextProps.ProClass
    });
  }

  handleBlur = (value) => {
    console.log(value)
    this.props.TransmitProjectType(value);
  }
  

  render() {
    const children = [];
    for (let i = 0; i < this.state.option.length; i++) {
      children.push(<Option key={i.toString(36) + i} value={this.state.option[i].title}>{this.state.option[i].title}</Option>);
    }

    return (
      <span>
        <Select
          showSearch
          style={{ width: 380 }}
          placeholder="微信小程序"
          value = {this.state.proClass}
          optionFilterProp="children"
          onBlur={this.handleBlur}
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
