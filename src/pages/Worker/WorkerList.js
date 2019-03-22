import React, { Component } from 'react';
import { Radio, Divider, Table, Button, TreeSelect, Row, Col, Input } from 'antd';
const TreeNode = TreeSelect.TreeNode;
const { Column } = Table;
const data = [
  {
    key: '1',
    name: '员工1',
  },
  {
    key: '2',
    name: '员工2',
  },
  {
    key: '3',
    name: '员工3',
  },
];
export default class Employee extends Component {
  render() {
    return (
      <Row>
        <Col span={12}>
          <TreeSelect showSearch style={{ width: 500 }} size="large" />
          <Button type="primary" size="large">
            筛选
          </Button>
        </Col>
        <Col span={12}>
          <Input size="large" style={{ width: 500 }} placeholder="输入搜索信息" />
          <Button type="primary" size="large">
            搜索
          </Button>
        </Col>
        <Col span={24}>
          <Button type="primary" size="large">
            + 新建
          </Button>
        </Col>
        <Col span={24}>
          <Table dataSource={data}>
            <Col title="员工名称" dataIndex="lastName" key="lastName" />
            <Column title="岗位" dataIndex="age" key="age" />
            <Col title="隶属部门" dataIndex="address" key="address" />
            <Col
              title="操作"
              key="action"
              render={(text, record) => (
                <span>
                  <a href="javascript:;">删除</a>
                  <Divider type="vertical" />
                  <a href="javascript:;">修改</a>
                </span>
              )}
            />
          </Table>
          <Button type="primary" size="large">
            完成
          </Button>
        </Col>
      </Row>
    );
  }
}
