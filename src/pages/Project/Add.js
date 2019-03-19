import React, { Component } from 'react'
import SelectComponent from '@/components/AddComponent/SelectComponent'
import PageHeaderWrapper from '@/components/PageHeaderWrapper';//面包屑
export default class Add extends Component {
  render() {
    return (
      <PageHeaderWrapper title="项目编辑">
        <div>
        <AddComponent/>
        <SelectComponent/>
        </div>
      </PageHeaderWrapper>
    )
  }
}
