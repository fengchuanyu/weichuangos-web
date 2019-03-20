import React, { Component } from 'react'
import InputSelectComponent from '@/components/AddComponent/InputSelectComponent';
import AddComponent from '@/components/AddComponent/AddComponent'
export default class ProjectType extends Component {
  constructor(props){
    super(props);
    this.state = {
        list:["微信小程序","移动端开发","Vue"]
    }
    this.getValue=this.getValue.bind(this)
}
  getValue(value){
    let newArray = this.state.list;
    newArray.push(value);
    this.setState({
      list:newArray
    })
  }
  
  render() {
    return (
      <div>
        <InputSelectComponent newValues={this.state.list}/>
        <AddComponent getValues={this.getValue} newList={this.state.list}/>
      </div>
    )
  }
}
