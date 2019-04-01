//列表页面-------------------------------------------------------------------------
import React, { Component } from 'react';
import { Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper'; //面包屑
import TabComponent from './components/ListComponent/TabComponent'; //分页表
import { formatMessage, FormattedMessage } from 'umi/locale';
import { connect }  from 'dva'

const list = [
  { title: '微信小程序', id: 1, isActive: false },
  { title: '移动端开发', id: 2, isActive: false },
  { title: 'Vue', id: 3, isActive: false },
  { title: '微信小程序', id: 4, isActive: false },
  { title: '移动端开发', id: 5, isActive: false },
  { title: 'Vue', id: 6, isActive: false },
  { title: '微信小程序', id: 7, isActive: false },
  { title: '移动端开发', id: 8, isActive: false },
  { title: 'Vue', id: 9, isActive: false },
  { title: '微信小程序', id: 10, isActive: false },
  { title: '移动端开发', id: 11, isActive: false },
  { title: 'Vue', id: 12, isActive: false },
  { title: '微信小程序', id: 13, isActive: false },
  { title: '移动端开发', id: 14, isActive: false },
  { title: 'Vue', id: 15, isActive: false },
  { title: '微信小程序', id: 16, isActive: false },
  { title: '移动端开发', id: 17, isActive: false },
  { title: 'Vue', id: 18, isActive: false },
  { title: '微信小程序', id: 19, isActive: false },
  { title: '移动端开发', id: 20, isActive: false },
  { title: 'Vue', id: 21, isActive: false },
  { title: '微信小程序', id: 22, isActive: false },
  { title: '移动端开发', id: 23, isActive: false },
  { title: 'Vue', id: 24, isActive: false },
  { title: '微信小程序', id: 25, isActive: false },
  { title: '移动端开发', id: 26, isActive: false },
  { title: 'Vue', id: 27, isActive: false },
  { title: '微信小程序', id: 28, isActive: false },
  { title: '移动端开发', id: 29, isActive: false },
  { title: 'Vue', id: 30, isActive: false },
  { title: '微信小程序', id: 31, isActive: false },
  { title: '移动端开发', id: 32, isActive: false },
  { title: 'Vue', id: 33, isActive: false },
];
const storageData = [
  { title: '微信小程序', id: 1, isActive: false },
  { title: '移动端开发', id: 2, isActive: false },
  { title: 'Vue', id: 3, isActive: false },
  { title: '微信小程序', id: 4, isActive: false },
  { title: '移动端开发', id: 5, isActive: false },
  { title: 'Vue', id: 6, isActive: false },
  { title: '微信小程序', id: 7, isActive: false },
  { title: '移动端开发', id: 8, isActive: false },
  { title: 'Vue', id: 9, isActive: false },
  { title: '微信小程序', id: 10, isActive: false },
  { title: '移动端开发', id: 11, isActive: false },
  { title: 'Vue', id: 12, isActive: false },
  { title: '微信小程序', id: 13, isActive: false },
  { title: '移动端开发', id: 14, isActive: false },
  { title: 'Vue', id: 15, isActive: false },
  { title: '微信小程序', id: 16, isActive: false },
  { title: '移动端开发', id: 17, isActive: false },
  { title: 'Vue', id: 18, isActive: false },
  { title: '微信小程序', id: 19, isActive: false },
  { title: '移动端开发', id: 20, isActive: false },
  { title: 'Vue', id: 21, isActive: false },
  { title: '微信小程序', id: 22, isActive: false },
  { title: '移动端开发', id: 23, isActive: false },
  { title: 'Vue', id: 24, isActive: false },
  { title: '微信小程序', id: 25, isActive: false },
  { title: '移动端开发', id: 26, isActive: false },
  { title: 'Vue', id: 27, isActive: false },
  { title: '微信小程序', id: 28, isActive: false },
  { title: '移动端开发', id: 29, isActive: false },
  { title: 'Vue', id: 30, isActive: false },
  { title: '微信小程序', id: 31, isActive: false },
  { title: '移动端开发', id: 32, isActive: false },
  { title: 'Vue', id: 33, isActive: false },
  { title: '微信小程序', id: 34, isActive: false },
  { title: '移动端开发', id: 35, isActive: false },
  { title: 'Vue', id: 36, isActive: false },
  { title: '微信小程序', id: 37, isActive: false },
  { title: '移动端开发', id: 38, isActive: false },
  { title: 'Vue', id: 39, isActive: false },
  { title: '微信小程序', id: 40, isActive: false },
  { title: '移动端开发', id: 41, isActive: false },
  { title: 'Vue', id: 42, isActive: false },
  { title: '微信小程序', id: 43, isActive: false },
  { title: '移动端开发', id: 44, isActive: false },
  { title: 'Vue', id: 45, isActive: false },
];

@connect((underWay) => {
  return ({
    underWay, 
  })
})



export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: list,
      storageData: storageData,
      
    };
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type: 'Underway/fetch',  
      payload:{
}
    });    
  }

  listDel(text) {
    this.setState({
      listData: this.state.listData.filter(item => {
        return item.id != text.id;
      }),
    });
  }
  storageDel(text) {
    this.setState({
      storageData: this.state.storageData.filter(item => {
        return item.id != text.id;
      }),
    });
  }
  render() {
    return (
      
      <PageHeaderWrapper title={name}>
        <Card bordered={false}>
          <div>
            <TabComponent
              ListData={this.state.listData}
              StorageData={this.state.storageData}
              listDel={this.listDel.bind(this)}
              storageDel={this.storageDel.bind(this)}
            />
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
