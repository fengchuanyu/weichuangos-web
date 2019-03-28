import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddComponent from '@/components/AddComponent/AddComponent'
import { Select } from 'antd';

const Option = Select.Option;
const parent=["Vue","React","Ajax","jQuery","Webpack","antd","node","ES2015+","dva","koa","UmiJS","Axure","mockJS","zepto.js"];
const children = [];
for (let i = 0; i < parent.length; i++) {
  children.push(<Option key={parent[i].toString(36)}>{parent[i].toString(36)}</Option>);
}
// children.push(<Option key="183429375832"><AddComponent/></Option>);
class SelectComponent extends Component{
      constructor(props){
        super(props);
        this.state = {
          skillStack:'',
          skillStackArray:[],
        }
      }
      handleChange=(value) => {
        console.log(`${value}`);
        this.setState({
          skillStack:`${value}`,
          skillStackArray:value
        })
        this.props.TransmitProjectStack(this.state.skillStack); 
        this.props.TransmitProjectStackArray(this.state.skillStackArray);
        console.log(this.state.skillStack)
        console.log(this.state.skillStackArray)
      }
      render(){
          return(
              <div id="testaa">
                  <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    defaultValue={['ES2015+']}
                    onChange={this.handleChange} //why
                  >   
                    {children}
                </Select>
              </div>
          )
      }
}
export default SelectComponent;