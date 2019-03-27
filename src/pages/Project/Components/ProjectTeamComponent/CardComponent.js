import React, { Component } from 'react'
import { Card, Col, Row ,Avatar,Icon,List,Button,Modal,Select,Input} from 'antd';
import styles from './Card.less'
const Search = Input.Search;
export default class CardComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      visible: false,
      nowData:[],
      list:[],
      datas:[],
      nowDatas:[],
    }
  }
  componentDidMount() {
    this.setState({
      list: this.props.List.concat({ title: '全部项目', id: this.props.List.length, isActive: false}),
      datas:this.props.Datas,
      nowDatas:this.props.Datas
    });
  }
  showModal = (data) => {
    console.log(data);
    
    this.setState({
      visible: true,
      nowData:data
    });
  }

  handleOk = (e) => {
    this.setState({
      visible: false,
      
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }
  handleChange(value) {
    if(value!="全部项目"){
      this.setState({
        nowDatas:this.state.datas.filter((filterData)=>{
          return filterData.data[3].value==value;
        })
      })
    }else{
      this.setState({
        nowDatas:this.state.datas
      })
    }
    }
  render() {
    const children = [];
    for (let i = 0; i < this.state.list.length; i++) {
      children.push(<Option key={this.state.list[i].id} value={this.state.list[i].title}>{this.state.list[i].title}</Option>);
    }
    return (
      <div>
        <span style={{position:'relative'}}>
          <span>
            <span style={{ position:'relative',top:-5,marginLeft: 300 }}>进行中的项目：</span>
            <Select defaultValue={this.state.nowValue?this.state.nowValue:"全部项目" }
            style={{ position:'absolute', left:400,top:-10 }} 
            onChange={this.handleChange.bind(this)}
            >
              {children}
            </Select>
          </span>
          <span>
            <Search
              placeholder="请输入"
              onSearch={value => {
              {if(value!=""){
                  this.setState({
                    nowDatas:this.state.datas.filter((filterData)=>{
                      return filterData.data[3].value.indexOf(value)!=-1;
                    })
                  })
                }else{
                  this.setState({
                    nowDatas:this.state.nowDatas
                  })
                }
              }
          }
          }
              enterButton
              style={{ position:'absolute', left:680,width: 250,top:-10}}
            />
          </span>
        </span>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <List
            size="small"
            bordered={{width:1200}}
            style={{height: 1050, width:1250}}
            dataSource={this.state.nowDatas}
            renderItem={data=> (
            <List.Item key={data.id} className={styles.card}>
              <Card
                style={{height:300,width: 363,marginLeft:1,marginRight:1,marginBottom:10}}
                actions={[<Button style={{bottom:2,height:35,width:300}} type="primary" onClick={this.showModal.bind(this,data.data)}>查看详情</Button>]}
              >
                <List
                  size="small"
                  bordered={{width:400}}
                  dataSource={data.data}
                  renderItem={item => (<List.Item key={item.key}>{item.key}:{item.value}</List.Item>)}
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
                  renderItem={item => (<List.Item key={item.key}>{item.key}:{item.value}</List.Item>)}
              />
          </Modal>
      </div>
    )
  }
}

