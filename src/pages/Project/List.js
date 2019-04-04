//列表页面-------------------------------------------------------------------------
import React, { Component } from 'react';
import { Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper'; //面包屑
import TabComponent from './components/ListComponent/TabComponent'; //分页表
import { formatMessage, FormattedMessage } from 'umi/locale';


import { connect }  from 'dva'


@connect((projectList) => {
  return ({
    projectList, 
  })
})



export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      storageData: [],
      projectInfo: []
    };
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type : 'projectList/getProjectListInfo',
      payload :'',
    })
  }

  componentWillReceiveProps(){
    if(this.props.projectList.projectList.list.list){
        this.setState({
          listData:this.props.projectList.projectList.list.list,
          storageData:this.props.projectList.projectList.list.storageData
        },()=>{
          console.log(this.state.storageData)
        })
    }
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
              ProjectInfo = {this.state.projectInfo}
              listDel={this.listDel.bind(this)}
              storageDel={this.storageDel.bind(this)}
            />
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
