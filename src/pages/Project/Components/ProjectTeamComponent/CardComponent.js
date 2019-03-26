import React, { Component } from 'react';
import { Card, Col, Row, Avatar, Icon, List } from 'antd';
import ModalComponent from './ModalComponent';
import styles from './Card.less';
const data = [
  { key: '组名', value: '' },
  { key: '组长', value: '' },
  { key: '组员', value: '' },
  { key: '组内人数', value: '' },
  { key: '报选项目', value: '' },
  { key: '项目报选时间', value: '' },
];

const data1 = [
  { key: '组名', value: '' },
  { key: '组长', value: '' },
  { key: '组员', value: '' },
  { key: '组内人数', value: '' },
  { key: '报选项目', value: '' },
  { key: '项目报选时间', value: '' },
];

const data2 = [
  { key: '组名', value: '' },
  { key: '组长', value: '' },
  { key: '组员', value: '' },
  { key: '组内人数', value: '' },
  { key: '报选项目', value: '' },
  { key: '项目报选时间', value: '' },
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
    // console.log(123);

    this.setState({
      nowData: data,
    });
  }
  render() {
    const { Meta } = Card;
    return (
      <div>
        <div style={{ background: '#ECECEC', padding: '5px' }}>
          <List
            size="small"
            bordered={{ width: 1100 }}
            style={{ height: 1050, width: 1250 }}
            dataSource={datas}
            renderItem={data => (
              <List.Item key={data.id} className={styles.card}>
                <Card
                  style={{
                    height: 320,
                    width: 363,
                    marginLeft: 1,
                    marginRight: 1,
                    marginBottom: 10,
                  }}
                  actions={[
                    <ModalComponent
                      NowData={this.state.nowData}
                      onClick={this.content.bind(this, data)}
                    />,
                  ]}
                >
                  <List
                    size="small"
                    bordered={{ width: 400 }}
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
