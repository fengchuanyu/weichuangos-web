import React, { Component } from 'react'
import { Select,Input } from 'antd';

const Option = Select.Option;
const Search = Input.Search;
function handleChange(value) {
  console.log(`selected ${value}`);
}
export default class SelectComponent extends Component {
  render() {
    return (
      <div >
        <span>进行中的项目:</span>
         <span>
            <Select defaultValue="lucy" style={{ width: 300 }} onChange={handleChange}>
            <Option value="jack">正在进行的项目1</Option>
            <Option value="lucy">正在进行的项目2</Option>
            <Option value="disabled" >正在进行的项目3</Option>
            <Option value="Yiminghe">正在进行的项目4</Option>
            </Select>
        </span>
        <span>
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          enterButton
          style={{width:300}}
        />
        </span>
      </div>
    )
  }
}
