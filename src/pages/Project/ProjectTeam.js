//项目组页面-------------------------------------------------------------------------
import React, { Component } from 'react'
import PageHeaderWrapper from '@/components/PageHeaderWrapper';//面包屑
import SelectComponent from './components/ProjectTeamComponent/SelectComponent';//项目选择
import CardComponent from './components/ProjectTeamComponent/CardComponent';//栅格卡片

export default class ProjectTeam extends Component {
  render() {
    return (
      <PageHeaderWrapper title="项目组">
      <div>
        <SelectComponent/>
        <CardComponent/>
      </div>
      </PageHeaderWrapper>
    )
  }
}
