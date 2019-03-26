import React, { Component } from 'react';
import { Card, Col, Row, Avatar, Icon, List } from 'antd';
import ModalComponent from './ModalComponent';
import styles from './Card.less';
const data = [
  { key: '组长:', value: 'ehrthbt' },
  { key: '组员:', value: 'htrhtr' },
  { key: '组内人数:', value: 'htrhtr' },
  { key: '报选项目:', value: 'htrhtr' },
  { key: '项目报选时间:', value: 'htrhtr' },
];
const data1 = [
  { key: '组长:', value: 'gegvgrtn' },
  { key: '组员:', value: 'gegvgrtn' },
  { key: '组内人数:', value: 'gegvgrtn' },
  { key: '报选项目:', value: 'gegvgrtn' },
  { key: '项目报选时间:', value: 'gegvgrtn' },
];
const data2 = [
  { key: '组长:', value: 'ukiumiukmu' },
  { key: '组员:', value: 'ukiumiukmu' },
  { key: '组内人数:', value: 'ukiumiukmu' },
  { key: '报选项目:', value: 'ukiumiukmu' },
  { key: '项目报选时间:', value: 'ukiumiukmu' },
];
const datas = [
  { id: 1, data: data },
  { id: 2, data: data1 },
  { id: 3, data: data2 },
  { id: 4, data: data },
  { id: 5, data: data },
  { id: 6, data: data },
  { id: 7, data: data },
  { id: 8, data: data },
  { id: 9, data: data },
];
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowData: [],
    };
  }
  content(data) {
    console.log(123);

    this.setState({
      nowData: data,
    });
  }
  render() {
    const { Meta } = Card;
    return (
      <div>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <List
            size="small"
            bordered
            style={{ height: 950 }}
            dataSource={datas}
            renderItem={data => (
              <List.Item key={data.id} className={styles.card}>
                <Card
                  style={{ width: 260, marginLeft: 10, marginRight: 10 }}
                  actions={[
                    <ModalComponent
                      NowData={this.state.nowData}
                      onClick={this.content.bind(this, data)}
                    />,
                  ]}
                >
                  <List
                    size="small"
                    bordered
                    dataSource={data.data}
                    renderItem={item => (
                      <List.Item key={item.key}>
                        {item.key}:{item.value}
                      </List.Item>
                    )}
                  />
                </Card>
              </List.Item>
            )}
          />
        </div>
        ,
      </div>
    );
  }
}