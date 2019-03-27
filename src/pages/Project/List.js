//列表页面-------------------------------------------------------------------------
import React, { Component } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper'; //面包屑
import TabComponent from './components/ListComponent/TabComponent'; //分页表
const list=[{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false }];
const storageData=[{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false },{ title: '微信小程序', id: 1, isActive: false },{ title: '移动端开发', id: 2, isActive: false },{ title: 'Vue', id: 3, isActive: false }];
export default class List extends Component {
  constructor(props){
    super(props);
    this.state={
      listData:list,
      storageData:storageData
    }
  }
  render() {
    return (
      <PageHeaderWrapper title="列表">
        <div>
          <TabComponent ListData={this.state.listData} StorageData={this.state.storageData}/>
        </div>
      </PageHeaderWrapper>
    );
  }
}
