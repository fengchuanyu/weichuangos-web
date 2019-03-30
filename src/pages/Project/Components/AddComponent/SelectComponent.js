import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddComponent from './AddComponent';

import { Select } from 'antd';

const Option = Select.Option;
const parent = [
  'Vue',
  'React',
  'Ajax',
  'jQuery',
  'Webpack',
  'antd',
  'node',
  'ES6',
  'dva',
  'koa',
  'UmiJS',
  'Axure',
  'mockJS',
  'zepto.js',
];
const children = [];
for (let i = 0; i < parent.length; i++) {
  children.push(<Option key={parent[i].toString(36)}>{parent[i].toString(36)}</Option>);
}
// children.push(<Option key="183429375832"><AddComponent/></Option>);
class SelectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillStack:'',
      skillStackArray:[],
    };
  }
  handleChange = value => {
    this.setState({
      skillStack:`${value}`,
      skillStackArray:value
    });
    this.props.TransmitProjectStack(this.state.skillStack); 
    this.props.TransmitProjectStackArray(this.state.skillStackArray);
    console.log(this.state.skillStack)
    console.log(this.state.skillStackArray)
  };

  // upLoad = value => {
  //   console.log(value);
  //   this.setState({
  //     test: `${value}`,
  //   });
  // };

  render() {
    return (
      <div id="testaa" style={{ marginLeft: 26.6 + '%', marginBottom: 15 }}>
        技术栈：
        <Select
          mode="multiple"
          style={{ width: 467 }}
          placeholder="Please select"
          defaultValue={['ES6']}
          onChange={this.handleChange}
          onBlur={this.upLoad} //why
        >
          {children}
        </Select>
      </div>
    );
  }
}
export default SelectComponent;
