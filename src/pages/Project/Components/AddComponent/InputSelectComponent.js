import React, { Component } from 'react';
import { Select } from 'antd';
<<<<<<< HEAD:src/pages/Project/Components/AddComponent/InputSelectComponent.js
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
=======

const Option = Select.Option;
>>>>>>> hl:src/components/AddComponent/InputSelectComponent.js

export default class InputSelectComponent extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD:src/pages/Project/Components/AddComponent/InputSelectComponent.js
    this.state = {
      option: [],
    };
  }
  componentDidMount() {
    this.setState({
      option: this.props.newValues,
    });
=======
    this.state={
      option:[]
    }

  }

  componentDidMount(){
    this.setState({
      option:this.props.newValues
    })

>>>>>>> hl:src/components/AddComponent/InputSelectComponent.js
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      option: nextProps.newValues,
    });
  }

<<<<<<< HEAD:src/pages/Project/Components/AddComponent/InputSelectComponent.js
=======
  handleBlur = (value) => {
    this.props.TransmitProjectType(value);
  }
  
>>>>>>> hl:src/components/AddComponent/InputSelectComponent.js
  render() {
    const children = [];
    for (let i = 0; i < this.state.option.length; i++) {
<<<<<<< HEAD:src/pages/Project/Components/AddComponent/InputSelectComponent.js
      children.push(<Option key={i.toString(36) + i}>{this.state.option[i].title}</Option>);
=======
      children.push(<Option key={this.state.option[i].title}>{this.state.option[i].title}</Option>);
>>>>>>> hl:src/components/AddComponent/InputSelectComponent.js
    }

    return (
      <span>
        <Select
          showSearch
<<<<<<< HEAD:src/pages/Project/Components/AddComponent/InputSelectComponent.js
          style={{ width: 380 }}
          placeholder="微信小程序"
          optionFilterProp="children"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
=======
          style={{ width: 200 }}
          placeholder="点击此处选中"
          optionFilterProp="children"
          // onChange={this.handleChange}
          onBlur={this.handleBlur}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
>>>>>>> hl:src/components/AddComponent/InputSelectComponent.js
        >
          {children}
        </Select>
      </span>
    );
  }
}
