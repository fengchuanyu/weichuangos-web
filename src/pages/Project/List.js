//列表页面-------------------------------------------------------------------------
import React, { Component } from 'react'
import PageHeaderWrapper from '@/components/PageHeaderWrapper';//面包屑
import TabComponent from '@/components/ListComponent/TabComponent'//项目分类

export default class List extends Component {
  render() {
    return (
        <PageHeaderWrapper title="列表">
            <div>
                <TabComponent/>
            </div>
        </PageHeaderWrapper>
    )
  }
}
