//项目组页面-------------------------------------------------------------------------
import React, { Component } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper'; //面包屑
import CardComponent from './components/ProjectTeamComponent/CardComponent'; //栅格卡片
const data=[{key:"组长:",value:"ehrthbt"},{key:"组员:",value:"htrhtr"},{key:"组内人数:",value:"htrhtr"},{key:"报选项目:",value:"微信小程序"},{key:"项目报选时间:",value:"htrhtr"}];
const data1=[{key:"组长:",value:"gegvgrtn"},{key:"组员:",value:"gegvgrtn"},{key:"组内人数:",value:"gegvgrtn"},{key:"报选项目:",value:"移动端开发"},{key:"项目报选时间:",value:"gegvgrtn"}];
const data2=[{key:"组长:",value:"ukiumiukmu"},{key:"组员:",value:"ukiumiukmu"},{key:"组内人数:",value:"ukiumiukmu"},{key:"报选项目:",value:"Vue"},{key:"项目报选时间:",value:"ukiumiukmu"}];
const datas=[
  {id:1,data:data},{id:2,data:data1},{id:3,data:data2},{id:4,data:data},{id:5,data:data},{id:6,data:data},{id:7,data:data},{id:8,data:data},{id:9,data:data}
];
const list=[{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false }];
export default class ProjectTeam extends Component {
  constructor(props){
    super(props);
    this.state={
      datas:datas,
      list:list
    }
  }
  render() {
    return (
      <PageHeaderWrapper title="项目组">
        <div>
          <CardComponent Datas={this.state.datas} List={this.state.list}/>
        </div>
      </PageHeaderWrapper>
    );
  }
}
