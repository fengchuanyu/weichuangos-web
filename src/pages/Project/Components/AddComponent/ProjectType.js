import React, { Component } from 'react';
import InputSelectComponent from './InputSelectComponent';
import AddComponent from './AddComponent';
import  { connect } from 'dva';

let flag = 0;
@connect((classTypeList) => {
  return ({
    classTypeList, 
  })
})


export default class ProjectType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      nowId: 3,
      projectClassValue:'',
      reviseProClass:''
    };
    this.getValue = this.getValue.bind(this);
  }

  componentDidMount(){
    const { dispatch } = this.props;
      dispatch({
        type:'classTypeList/getProjectClassTypeList',
    })
    flag = 0;
  }

  getValue(value) {
    let obj = {};
    obj.title = value;
    obj.id = this.state.nowId+1;
    obj.isActive = false;
    let newArray = this.state.list;   
    newArray.push(obj);
    console.log(newArray);
    
    this.setState({
      list: newArray,
      nowId: this.state.nowId++,
    },()=>{
      this.props.TransmitProjectTypeArray(this.state.list);
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
    },()=>{
       this.props.TransmitProjectTypeArray(this.state.list);
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
    },()=>{
      this.props.TransmitProjectTypeArray(this.state.list);
    });
  }
  del(item) {
    let temp = this.state.list;
    temp = temp.filter(function(x) {
      return x.id != item.id;
    });
    // console.log(temp);
    
    this.setState({
      list: temp,
    },()=>{
      this.props.TransmitProjectTypeArray(this.state.list);
    });
    
  }

  Temp = (props) =>{  //获取子组件的value【input select】
    this.setState({
      projectClassValue:props
    },()=>{
      this.props.TransmitProjectClassType(this.state.projectClassValue)
      this.props.TransmitProjectTypeArray(this.state.list);
    }) 
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    if(nextProps.classTypeList.classTypeList.list.list){
      this.setState({
        list:nextProps.classTypeList.classTypeList.list.list
      })
    }
    this.setState({
      reviseProClass:nextProps.ReviseProClass,
    },()=>{
      console.log(this.state.reviseProClass)
    })
  } 

  render() {
    return (
      <div style={{ marginLeft: 25.4 + '%', marginBottom: 15 }}>
        项目分类：
        <InputSelectComponent 
          newValues={this.state.list}
          TransmitProjectType = {this.Temp} 
          ProClass = {this.state.reviseProClass}/>
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
