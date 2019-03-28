// 项目编辑页面-------------------------------------------------------------------------
import React, { Component } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';//面包屑
import InputNameComponent from '@/components/AddComponent/InputNameComponent';//项目名称
import ProjectType from '@/components/AddComponent/ProjectType'//项目分类
import InputNumberComponent from '@/components/AddComponent/InputNumberComponent';//项目编号
import SelectComponent from '@/components/AddComponent/SelectComponent';//技术栈
import OtherdocumentsComponent from '@/components/AddComponent/OtherdocumentsComponent';//其他文件
import ProgressIntroductionConponent from '@/components/AddComponent/ProgressIntroductionConponent';//项目介绍
import ButtonComponent from '@/components/AddComponent/ButtonComponent';//确认取消按钮



export default class Add extends Component {
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

  RecieveProjectName = (props) => {
    this.setState({
      proName:props
    });
  }

  RecieveProjectNumber = (props) => {
    this.setState({
      proNumber:props
    });
  }

  RecieveProjectStack = (props) => {
    this.setState({
      proStack:props
    })
  }

  RecieveProjectStackArray = (props) =>{
    this.setState({
      proStackArray:props
    })
  }

  RecieveProjectClassType = (props) => {
    this.setState({
      proClass:props
    })
  }

  RecieveProjectTypeArray = (props) => {
    this.setState({
      proClassArray:props
    })
  }
 
  render() {
    return (
      <PageHeaderWrapper title="项目编辑">
        <div>
        项目名称：<InputNameComponent TransmitProjectName = {this.RecieveProjectName}/>
        项目分类: <ProjectType   TransmitProjectClassType = {this.RecieveProjectClassType}
                                TransmitProjectTypeArray = {this.RecieveProjectTypeArray}/>
        项目编号: <InputNumberComponent TransmitProjectNumber = {this.RecieveProjectNumber}/> 
        技术栈: < SelectComponent TransmitProjectStack = {this.RecieveProjectStack}
                                  TransmitProjectStackArray = {this.RecieveProjectStackArray} />
        其他文件：<OtherdocumentsComponent/>
        项目介绍：<ProgressIntroductionConponent/>
        <ButtonComponent 
          PropsProjectName = {this.state.proName}
          PropsProjectNumber = {this.state.proNumber}
          PropsProjectStack = {this.state.proStack}
          PropsProjectStackArray = {this.state.proStackArray}
          PropsProjectClassType = {this.state.proClass}
          PropsProjectTypeArray = {this.state.proClassArray}
        /> 
        </div>
      </PageHeaderWrapper>
    )
  }
}
