import React, { Component } from 'react';
import InputSelectComponent from './InputSelectComponent';
import AddComponent from './AddComponent';
export default class ProjectType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { title: '微信小程序', id: 1, isActive: false },
        { title: '移动端开发', id: 2, isActive: false },
        { title: 'Vue', id: 3, isActive: false },
      ],
      nowId: 3,
    };
    this.getValue = this.getValue.bind(this);
  }
  getValue(value) {
    let obj = {};
    obj.title = value;
    obj.id = this.state.nowId++;
    obj.isActive = false;
    let newArray = this.state.list;
    newArray.push(obj);
    this.setState({
      list: newArray,
      nowId: this.state.nowId++,
    });
  }
  setActive(item) {
    let temp = this.state.list;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id == item.id) {
        temp[i].isActive = !item.isActive;
      }
    }
    this.setState({
      list: temp,
    });
  }
  setItem(item, value) {
    let temp = this.state.list;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id == item.id) {
        temp[i].title = value;
        temp[i].isActive = !item.isActive;
      }
    }
    this.setState({
      list: temp,
    });
  }
  del(item) {
    let temp = this.state.list;
    temp = temp.filter(function(x) {
      return x.id != item.id;
    });
    this.setState({
      list: temp,
    });
  }
  render() {
    return (
      <div style={{ marginLeft: 25.4 + '%', marginBottom: 15 }}>
        项目分类：
        <InputSelectComponent newValues={this.state.list} />
        <AddComponent
          getValues={this.getValue}
          newList={this.state.list}
          Active={this.setActive.bind(this)}
          Item={this.setItem.bind(this)}
          Del={this.del.bind(this)}
        />
      </div>
    );
  }
}
