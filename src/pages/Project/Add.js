// 项目编辑页面-------------------------------------------------------------------------
import React, { Component } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper'; //面包屑
import InputNameComponent from './components/AddComponent/InputNameComponent'; //项目名称
import ProjectType from './components/AddComponent/ProjectType'; //项目分类
import InputNumberComponent from './components/AddComponent/InputNumberComponent'; //项目编号
import SelectComponent from './components/AddComponent/SelectComponent'; //技术栈
import OtherdocumentsComponent from './components/AddComponent/OtherdocumentsComponent'; //其他文件
import ProgressIntroductionConponent from './components/AddComponent/ProgressIntroductionConponent'; //项目介绍
import ButtonComponent from './components/AddComponent/ButtonComponent'; //确认取消按钮
export default class Add extends Component {
  render() {
    return (
      <PageHeaderWrapper title="项目编辑">
        <div>
          <InputNameComponent />
          <ProjectType />
          <InputNumberComponent />
          <SelectComponent />
          <OtherdocumentsComponent />
          <ProgressIntroductionConponent />
          <ButtonComponent />
        </div>
      </PageHeaderWrapper>
    );
  }
}
