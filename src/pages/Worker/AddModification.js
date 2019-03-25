/*
 * @Author: Why-WU
 * @LastEditors: Why-WU
 * @Description: 这个是OA员工列表中的“增加/删除”组建，表单引用'@/components/FormList/FormList'
 * @注意：左边列表配置在“@/locales/zh-CN/menu.js里”
 *       OA员工列表整个大模块写在“@/pages/Worker”文件夹下
 * @Date: 2019-03-19 18:03:48
 * @LastEditTime: 2019-03-20 15:19:11
 */

import React, { Component } from 'react';
import FormList from '@/pages/Worker/Components/FormList/FormList';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';//面包屑
export default class AddModification extends Component {
  render() {
    return (
      <PageHeaderWrapper title="增加/删除">
      <div>
        <FormList />
      </div>
      </PageHeaderWrapper>
    );
  }
}
