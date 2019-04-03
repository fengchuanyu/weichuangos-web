//项目组页面-------------------------------------------------------------------------
import React, { Component } from 'react';
import { Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper'; //面包屑
import CardComponent from './components/ProjectTeamComponent/CardComponent'; //栅格卡片

import { connect } from 'dva';


let flag = 0;
@connect((projectTeam) => {
  return ({
    projectTeam, 
  })
})


export default class ProjectTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      list: [],
      test:1
    };
  }
  componentDidMount(){
     const { dispatch } = this.props;
    dispatch({
      type:"projectTeam/getProjectTeamInfo",
      payload:{}
    }) 
    flag = 0;
  }

  componentWillReceiveProps(){
    let _this = this;
    // console.log(flag++);
    // console.log(this.props.projectTeam.projectTeam.list.datas);
    if(this.props.projectTeam.projectTeam.list.datas){
        this.setState({
        datas:this.props.projectTeam.projectTeam.list.datas,
        list:this.props.projectTeam.projectTeam.list.list,
        test : ++this.state.test  
      },()=>{
        console.log(this.state)
      })
    }
  }

  render() { 
    return (
      <PageHeaderWrapper title="项目组">
          <div>
            <CardComponent  Datas={this.state.datas} List={this.state.list} Test = {this.state.test}/>
          </div>
      </PageHeaderWrapper>
    );
  }
}
/*Datas={this.state.datas} List={this.state.list}
const { dispatch } = this.props;
    dispatch({
      type:"projectTeam/getProjectTeamInfo",
      payload:{}
    }) 
*/ 
