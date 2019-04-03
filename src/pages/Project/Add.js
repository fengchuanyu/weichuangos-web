// 项目编辑页面-------------------------------------------------------------------------
import React, { Component } from 'react';
import { Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper'; //面包屑
import InputNameComponent from './components/AddComponent/InputNameComponent'; //项目名称
import ProjectType from './components/AddComponent/ProjectType'; //项目分类
import InputNumberComponent from './components/AddComponent/InputNumberComponent'; //项目编号
import SelectComponent from './components/AddComponent/SelectComponent'; //技术栈
import OtherdocumentsComponent from './components/AddComponent/OtherdocumentsComponent'; //上传文件
import ProgressIntroductionConponent from './components/AddComponent/ProgressIntroductionConponent'; //项目介绍
import ButtonComponent from './components/AddComponent/ButtonComponent'; //确认取消按钮
import { Button } from 'antd';
// import router from 'umi/router';//路由引用
const name = "123"
export default class Add extends Component {
  // click(){
  //   router.push('/project/list')
  // } //路由跳转.

  constructor(props){
    super(props);
    this.state={
      proName:'',
      proClass:'',
      proClassArray:[],
      proNumber:'',
      proStack:'',
      proStackArray:[],
      proIntroduction:'',
    }
  }
  ReceiveProjectName = (props) => {   
    console.log(props)
    this.setState({
      proName:props
    });
  }

  ReceiveProjectNumber = (props) => {
    this.setState({
      proNumber:props
    });
  }

  ReceiveProjectStack = (props) => {
    this.setState({
      proStack:props
    })
  }

  ReceiveProjectStackArray = (props) =>{
    this.setState({
      proStackArray:props
    })
  }

  ReceiveProjectClassType = (props) => {
    this.setState({
      proClass:props
    })
  }

  ReceiveProjectTypeArray = (props) => {
    this.setState({
      proClassArray:props
    })
  }

  ReceiveIntroduce = (props) =>{
    this.setState({
      proIntroduction:props
    })
  }

  render() {
    return (
      <PageHeaderWrapper title="项目编辑">
        <Card bordered={false}>
          <div>
            {/* <Button onClick={this.click.bind(this)}>OK</Button> */}
            <InputNameComponent 
              TransmitInputName = {this.ReceiveProjectName}/>
            <ProjectType 
              TransmitProjectClassType = {this.ReceiveProjectClassType}
              TransmitProjectTypeArray = {this.ReceiveProjectTypeArray}/>
            <InputNumberComponent 
              TransmitProjectNumber = {this.ReceiveProjectNumber}/>
            <SelectComponent 
              TransmitProjectStack = {this.ReceiveProjectStack}
              TransmitProjectStackArray = {this.ReceiveProjectStackArray}/>
            <OtherdocumentsComponent />
            <ProgressIntroductionConponent 
              TransmitIntroduce = {this.ReceiveIntroduce}/>
            <ButtonComponent 
              PropsProjectName = {this.state.proName}
              PropsProjectNumber = {this.state.proNumber}
              PropsProjectStack = {this.state.proStack}
              PropsProjectStackArray = {this.state.proStackArray}
              PropsProjectClassType = {this.state.proClass}
              PropsProjectTypeArray = {this.state.proClassArray}
              PropsIntroduce = {this.state.proIntroduction}
            />
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
