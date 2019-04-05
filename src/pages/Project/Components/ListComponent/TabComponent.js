import React, { Component } from 'react';
import { Tabs, Select, Input, Table, Divider, Tag, Modal, Button, Radio, List,Form } from 'antd';
import styles from './TabComponent.less';
const Option = Select.Option;
const Search = Input.Search;
const TabPane = Tabs.TabPane;
import router from 'umi/router';//路由引用
import { classNames } from 'classnames';
import ProjectTeam from './../../ProjectTeam';
import  { connect } from 'dva';

@connect((del) => {
  return ({
    del, 
  })
})
class TabComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: styles.active,
      none: styles.none,
      value1: 0,   //进行中任务的个数
      value2: 0, //仓库里....
      size: 'large',
      listVisible:false,   // 进行中是否显示的状态
      storageVisible:false,
      listData:[],
      nowData: [],
      nowProInfo : [],
      storageData: [],
      nowStorage: [],
      listType:[],     //进行中用于筛选的项目类型
      storageType: [],   //仓库中用于筛选的项目类型
      nowText: '',
      type:[],
      setSelect:'',
      setNum:0,
      setManager:'',
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      nowProInfo : nextProps.ProjectInfo,
      listData: nextProps.ListData,
      nowData: nextProps.ListData,
      storageData: nextProps.StorageData,
      nowStorage: nextProps.StorageData,
      value1: nextProps.ListData.length,   //进行中任务的个数
      value2: nextProps.StorageData.length, //仓库里....
      listType: Array.from(
        new Set(
          nextProps.ListData.concat({
            proClass: '全部项目',
            id: nextProps.ListData.length,
            isActive: false,
          }).map(item => {
            return item.proClass;
          })
        )
      ),
      storageType: Array.from(
        new Set(
          nextProps.StorageData.concat({
            proClass: '全部项目',
            id: nextProps.StorageData.length,
          }).map(item => {
            return item.proClass;    //只能返回一个值， 仅用于筛选
          })
        )
      ),
      type: Array.from(
        new Set(
          nextProps.StorageData.map(item => {
            return item.proClass;
          })
        )
      ),
    });
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
  handleChange(value) {
    console.log(value);
    if (value != '全部项目') {
      this.setState({
        nowData: this.state.listData.filter(item => {
          return item.proClass == value;
        }),
      });
    } else {
      this.setState({
        nowData: this.state.listData,
      });
    }
  }
  storageHandleChange(value) {
    console.log(value);
    if (value != '全部项目') {
      this.setState({
        nowStorage: this.state.storageData.filter(item => {
          return item.proClass == value;
        }),
      });
    } else {
      this.setState({
        nowStorage: this.state.storageData,
      });
    }
  }
  listShowModal = text => {    //显示详情里的内容发送一个请求   请求的是  当前项目里的内容
    this.setState({
      listVisible: true,
      nowText: text,
    },()=>{
      console.log(text)
    });
  };
  storageShowModal = text => {
    this.setState({
      storageVisible: true,
      nowText: text,
    });
  };
  listHandleOk = e => {
    this.setState({
      listVisible: false,
    });
  };
  storageHandleOk = e => {
    this.setState({
      storageVisible: false,
    });
    this.props.form.resetFields();
  };

  listHandleCancel = e => {
    this.setState({
      listVisible:false,
    });
  };
  storageHandleCancel = e => {
    this.setState({
      storageVisible:false,
    });
    this.props.form.resetFields();
  };
  listDelList(text) {
    this.props.listDel(text);
    const {dispatch} =this.props;
    dispatch({
      type:'projectDel/postDelProjectList',
        payload:{
          sendListTextId:text.id,
    } 
   })
  };
  
  listAdd(){
    router.push('/project/add');
  };
  listModify(text,e){
    console.log(text,e)
   
    // router.push({
    //   pathname: '/project/add',
    //   query: {
    //     id: text.id,
    //   },
    // })
    router.push('/project/add?id='+text.id);
  }//router   
  listProTeam(text){
    // router.push({
    //   pathname:'/project/projectteam',
    //   query:{
    //     proName:text.proName
    //   }
    // })
    router.push('/project/projectteam?proName='+text.proName);

  }                      
  storageDelList(text) {
    this.props.storageDel(text);
    const {dispatch} =this.props;
    dispatch({
      type:'projectDel/postDelProjectStorage',
        payload:{
          sendStorageTextId:text.id,
    } 
   })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.setState({
        storageVisible:false
      })
    });
    const {dispatch} =this.props;
    dispatch({
      type:'commit/postCommit',
        payload:{
          commitNum:this.state.setNum,
          commitManager:this.state.setManager,
          commitSelect:this.state.setSelect
    } 
   })
  };

  handleSelectChange = (value) => {
    // console.log(value);
    // this.props.form.setFieldsValue({
    //   note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    // });
    this.setState({
        setSelect:value,
    })
  };
  setNum(){
    this.setState({
      setNum:event.target.value,
    })
  }
  setNum(){
    this.setState({
      setNum:event.target.value,
    })
  }
  setManager(){
    this.setState({
      setManager:event.target.value,
    })
  }
  render() {
    const listChildren = [];
    const storageChildren = [];
    const project =[];
    for (let i = 0; i < this.state.listType.length; i++) {
      listChildren.push(
        <Option key={this.state.listType[i]} value={this.state.listType[i]}>
          {this.state.listType[i]}
        </Option>
      );
    }
    for (let i = 0; i < this.state.storageType.length; i++) {
      storageChildren.push(
        <Option key={this.state.storageType[i]} value={this.state.storageType[i]}>
          {this.state.storageType[i]}
        </Option>
      );
    }
    for (let i = 0; i < this.state.type.length; i++) {
      project.push(
        <Option key={this.state.type[i]} value={this.state.type[i]}>
          {this.state.type[i]}
        </Option>
      );
    }
    const columns1 = [
      // dataIndex 项目名称  
      {
        title: '项目名称',
        dataIndex: 'proName',
        key: 'proName',
        render: text => <a href="javascript:;">{text}</a>,
      },
      {
        title: 'Action',
        key: 'action',
        align: 'right',
        // diveder 竖线
        render: (text, record) => (
          <div>
            <a href="javascript:;" onClick={this.listModify.bind(this,text)}>修改</a>
            <Divider type="vertical" />  
            <a href="javascript:;" onClick={this.listDelList.bind(this, text)}>
              删除
            </a>
            <Divider type="vertical" />
            <a href="javascript:;" onClick={this.listShowModal.bind(this, text)}>
              查看详情
            </a>
          </div>
        ),
      },
    ];
    const columns2 = [
      {
        title: '项目名称',
        dataIndex: 'proName',
        key: 'proName',
        render: text => <a href="javascript:;">{text}</a>,
      },
      {
        title: 'Action',
        key: 'action',
        align: 'right',
        render: (text, record) => (
          <span>
            <a href="javascript:;" className={styles.guohua} onClick={this.listProTeam.bind(this,text)}>项目队伍</a> 
            <a href="javascript:;" onClick={this.listModify.bind(this)}>修改{record.name}</a>
            <Divider type="vertical" />
            <a href="javascript:;" onClick={this.storageDelList.bind(this, text)}>
              删除
            </a>
            <Divider type="vertical" />
            <a href="javascript:;" onClick={this.storageShowModal.bind(this, text)}>
              项目发布
            </a>
          </span>
        ),
      },
    ];
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div>
        <div style={{ marginLeft: 45 + '%' }}>
          <span className={this.state.active}>进行中({this.state.value1})</span>/
          <span className={this.state.none}>仓库({this.state.value2})</span>
        </div>
        <div className={styles.tab1}>
          <Tabs defaultActiveKey="1" onTabClick={this.click.bind(this)} className={styles.menu}>
            <TabPane tab="进行中的任务" key="1">
              <div>
                <span className={styles.rwlb}>任务列表</span>
                {/* <span className={styles.qbrw}>全部任务/({this.state.value2})</span> */}
                <span className={styles.rwss}>任务筛选：</span>
                <Select
                  defaultValue={this.state.listType[this.state.listType.length-1]}
                  style={{ width: 230, height: 20, fontSize: 13 + 'px' }}
                  onChange={this.handleChange.bind(this)}
                >
                  {listChildren}
                </Select>
                <Search
                  placeholder=" search "
                  onSearch={value => {
                    {
                      if (value != '') {
                        this.setState({
                          nowData: this.state.listData.filter(item => {
                            return item.title.indexOf(value) != -1;
                          }),
                        });
                      } else {
                        this.setState({
                          nowData: this.state.listData,
                        });
                      }
                    }
                  }}
                  style={{ width: 270, height: 33, fontSize: 14 + 'px', marginLeft: 1 + '%' }}
                />
              </div>
              {/* dataSourse是项目详情 */}
              <Table columns={columns1} dataSource={this.state.nowData} />  
            </TabPane>
            <TabPane tab="仓库中的任务" key="2">
              <div>
                <span className={styles.rwlb}>任务列表</span>
                {/* <span className={styles.qbrw}>全部任务/({this.state.value2})</span> */}
                <span className={styles.rwss}>任务筛选：</span>
                <Select
                  defaultValue={this.state.storageType[this.state.storageType.length-1]}
                  style={{ width: 230, height: 20, fontSize: 13 + 'px' }}
                  onChange={this.storageHandleChange.bind(this)}
                >
                  {storageChildren}
                </Select>
                <Search
                  placeholder=" search "
                  onSearch={value => {
                    {
                      if (value != '') {
                        this.setState({
                          nowStorage: this.state.storageData.filter(item => {
                            return item.title.indexOf(value) != -1;
                          }),
                        });
                      } else {
                        this.setState({
                          nowStorage: this.state.storageData,
                        });
                      }
                    }
                  }}
                  style={{ width: 270, height: 33, fontSize: 14 + 'px', marginLeft: 1 + '%' }}
                />
              </div>
              <Button
                type="dashed"
                size={this.state.size}
                style={{ width: 100 + '%', height: 33, marginTop: 10 }}
                onClick={this.listAdd.bind(this)}
              >
                + 添加
              </Button>
              <Table columns={columns2} dataSource={this.state.nowStorage} />
            </TabPane>
          </Tabs>
        </div>
        <Modal
          title="项目详情"
          visible={this.state.listVisible}
          onOk={this.listHandleOk}
          onCancel={this.listHandleCancel}
        >
          <p>项目名称：{this.state.nowText.proName}</p>
          <p>项目类型：{this.state.nowText.proClass}</p>
          <p>项目编号：{this.state.nowText.proNum}</p>
          <p>应用技术栈：{this.state.nowText.proStack}</p>
          <p>项目描述：</p>  
          {/* 怎么解析带标签的字符串<span dangerouslySetInnerHTML = {{_html : this.state.nowText.proInfo}}></span> */}
        </Modal>
        <Modal
          title="项目发布"
          visible={this.state.storageVisible}
          onOk={this.handleSubmit}
          onCancel={this.storageHandleCancel}
        >
          <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
            <Form.Item
              label="队伍个数"
            >
              {getFieldDecorator('允许参加项目队伍个数', {
                rules: [{ required: true, message: '请填写允许参加项目的队伍个数' }],
                // initialValue:'12'
              })(
                <Input 
                placeholder="填写允许参加项目的队伍个数" onChange={this.setNum.bind(this)}
                />
              )}
            </Form.Item>
            <Form.Item
              label="项目管理人"
            >
              {getFieldDecorator('项目管理人', {
                rules: [{ required: true, message: '请填写项目管理人' }],
                // initialValue:'xxx'
              })(
              <Input 
                placeholder="填写项目管理人" onChange={this.setManager.bind(this)}
              />
              )}
            </Form.Item>
            <Form.Item
              label="技术栈"
            >
              {getFieldDecorator('技术栈', {
                rules: [{ required: true, message: '请选择技术栈' }],
                // initialValue:'Vue'
              })(
                <Select
                  placeholder="选择一个技术栈"
                  onChange={this.handleSelectChange.bind(this)}
                >
                  {project}
                </Select>
              )}
            </Form.Item>
            {/* <Form.Item
              wrapperCol={{ span: 12, offset: 5 }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item> */}
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Form.create({ name: 'form_in_modal' })(TabComponent)
