import React, { Component } from 'react'
import AddComponent from '@/components/AddComponent/AddComponent'
import PageHeaderWrapper from '@/components/PageHeaderWrapper';//面包屑
export default class Add extends Component {
  render() {
    return (
      <PageHeaderWrapper title="项目编辑">
        <div>
        <AddComponent/>
        </div>
      </PageHeaderWrapper>
    )
  }
}
