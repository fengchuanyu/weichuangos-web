import React, { Component } from 'react';
import { Tabs, Select, Input } from 'antd';
const TabPane = Tabs.TabPane;
import FormItemComponent from './FormItemComponent';
import styles from './TabComponent.less';
import { Button, Radio, Icon } from 'antd';
import { List, Avatar } from 'antd';
const Option = Select.Option;
const Search = Input.Search;
function handleChange(value) {
  console.log(`selected ${value}`);
}
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    // href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    // description: '456',
    content: '789',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default class TabComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: styles.active,
      none: styles.none,
      value1: 10,
      value2: 1000,
      size: 'large',
    };
  }
  click(key) {
    if (key == 1) {
      this.setState({
        active: styles.active,
        none: styles.none,
      });
    } else {
      this.setState({
        active: styles.none,
        none: styles.active,
      });
    }
  }
  render() {
    const size = this.state.size;
    return (
      <div>
        <div style={{ marginLeft: 45 + '%' }}>
          <span className={this.state.active}>进行中({this.state.value1})</span>/
          <span className={this.state.none}>仓库({this.state.value2})</span>
        </div>
        <div>
          <Tabs defaultActiveKey="1" onTabClick={this.click.bind(this)}>
            <TabPane tab="进行中的任务" key="1">
              <FormItemComponent />
            </TabPane>
            <TabPane tab="仓库中的任务" key="2">
              <div>
                <span className={styles.rwlb}>任务列表</span>
                <span className={styles.qbrw}>全部任务/({this.state.value2})</span>
                <span className={styles.rwss}>任务筛选：</span>
                <Select
                  defaultValue="vue"
                  style={{ width: 230, height: 20, fontSize: 13 + 'px' }}
                  onChange={handleChange}
                >
                  <Option value="vue">vue</Option>
                  <Option value="webpack">webpack</Option>
                  <Option value="react">react</Option>
                </Select>
                <Search
                  placeholder=" search "
                  onSearch={value => console.log(value)}
                  style={{ width: 270, height: 33, fontSize: 14 + 'px', marginLeft: 3 + '%' }}
                />
              </div>
              <Button
                type="dashed"
                size={size}
                style={{ width: 100 + '%', height: 33, marginTop: 10 }}
              >
                + 添加
              </Button>
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: page => {
                    console.log(page);
                  },
                  pageSize: 3,
                }}
                dataSource={listData}
                renderItem={item => <List.Item key={item.title}> {item.content}</List.Item>}
              />
              ,
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
