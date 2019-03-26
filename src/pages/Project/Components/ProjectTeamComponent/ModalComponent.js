import React, { Component } from 'react';
import { Modal, Button, List } from 'antd';
const data = [
  { key: '组长:', value: 'ehrthbt' },
  { key: '组员:', value: 'htrhtr' },
  { key: '组内人数:', value: 'htrhtr' },
  { key: '报选项目:', value: 'htrhtr' },
  { key: '项目报选时间:', value: 'htrhtr' },
];
export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      nowData: [],
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
  componentWillReceiveProps(props) {
    console.log(props);

    this.setState({
      nowData: props.NowData,
    });
  }
  //   componentDidMount(){
  //       console.log(this.props);

  //     console.log(this);
  //     this.setState({
  //         nowData:this.props.NowData
  //     })
  //   }
  render() {
    return (
      <div style={{ height: 10 }}>
        <Button
          type="primary"
          onClick={this.showModal}
          style={{ bottom: 2, height: 35, width: 300 }}
        >
          查看详情
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          //   Change={this.prop}
        >
          <List
            size="small"
            bordered
            dataSource={this.state.nowData}
            renderItem={item => (
              <List.Item key={item.key}>
                {item.key}:{item.value}
              </List.Item>
            )}
          />
        </Modal>
      </div>
    );
  }
}
