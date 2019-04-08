import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Col, Row, Avatar, Icon, List, Button, Modal, Select, Input } from 'antd';
import styles from './Card.less';
const Search = Input.Search;
const Option=Select.Option;
export default class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      nowData: [],
      list: [],
      datas: [],
      nowDatas: [],
      TEXT:[]
    };
  }
  componentWillReceiveProps(pro){
    // this.props 记录上一次的
    //nextprops 会进行新旧记录比对，然后修改.
    this.setState({
      list: pro.List.concat({
        title: '全部项目',
        id: pro.List.length,
        isActive: false,
      }),
      datas: pro.Datas,
      nowDatas: pro.Datas,
    },()=>{
      let sHref=window.location.href;
      if(sHref.indexOf('?')!=-1){
        let args=sHref.split("?");
        if(args[0]==sHref){
          return '';
        }
        let arr=args[1].split("=");
        console.log(arr[1]);
          this.setState({
            nowDatas: this.state.datas.filter(filterData => {
              return filterData.data[0].value == arr[1];
            }),
            nowValue:arr[1],
          },()=>{
            console.log(this.state.nowDatas);
            console.log(this.state.nowValue);
            
          });
        }
        });
  }
  showModal = data => {  //是否显示详情页
    console.log(data);

    this.setState({
      visible: true,
      nowData: data,
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
  handleChange(value) {
    if (value != '全部项目') {
      this.setState({
        nowDatas: this.state.datas.filter(filterData => {
          return filterData.data[3].value == value;
        }),
      });
    } else {
      this.setState({
        nowDatas: this.state.datas,
      });
    }
  }
  render() {
    const children = [];
    // 获取全部项目类型
    for (let i = 0; i < this.state.list.length; i++) {
      children.push(
        <Option key={this.state.list[i].id} value={this.state.list[i].title}>  
          {this.state.list[i].title}
        </Option>
      );
    }
    return (
      <div>
        <div style={{ position: 'relative' }}>
          <div>
            <span style={{ position: 'relative', top: -5, marginLeft: 300 }}>进行中的项目：</span>
            <Select
              defaultValue={this.state.nowValue ? this.state.nowValue : '全部项目'}
              style={{ position: 'absolute', left: 400, top: -10 }}
              onChange={this.handleChange.bind(this)}
            >
              {children}
            </Select>
          </div>
          {/* <div>
            <Search
              className={'cardinput'}
              placeholder="请输入"
              onSearch={value => {
                {
                  if (value != '') {
                    this.setState({
                      nowDatas: this.state.datas.filter(filterData => {
                        return filterData.data[3].value.indexOf(value) != -1;
                      }),
                    });
                  } else {
                    this.setState({
                      nowDatas: this.state.datas,
                    });
                  }
                }
              }}
              enterButton
              style={{ position: 'absolute', left: 680, width: 250, top: -10 }}
            />
          </div> */}
        </div>
        <div className={styles.lista}>
          <List
            size="small"
            
            dataSource={this.state.nowDatas}
            renderItem={data => (
              <List.Item key={data.id} className={styles.card} style={{width:33+"%"}}>
                <Card
                  size="small"
                  className={styles.card}
                  style={{ height: 250, width: 330, marginLeft: 1, marginRight: 1 }}
                  actions={[
                    <Button
                      
                      block
                      type="primary"
                      onClick={this.showModal.bind(this, data.data)}
                    >查看详情</Button>,
                  ]}
                >
                  <List
                    bordered={{ width: 250 }}
                    dataSource={data.data.slice(1,data.data.length)}
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
        <Modal
          title="项目详细信息"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
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
