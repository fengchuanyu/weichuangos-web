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
          test:'',
        }
      }
      handleChange=(value) => {
        // console.log(`selected ${value}`);
        this.setState({
          test:`${value}`
        })
        // console.log(test);
      }

      upLoad =(value) => {
        console.log(value);
        this.setState({
          test : `${value}`
        })
      }
      


      render(){
          return(
              <div id="testaa" style={{ marginLeft:26.8+'%',marginBottom:15}}>
              技术栈：
                  <Select
                    mode="multiple"
                    style={{ width: 467 }}
                    placeholder="Please select"
                    defaultValue={['ES2015+']}
                    onChange={this.handleChange}
                    onBlur = {this.upLoad} //why
                >   
                    {children}
                </Select>
              </div>
          )
      }
}
export default SelectComponent;