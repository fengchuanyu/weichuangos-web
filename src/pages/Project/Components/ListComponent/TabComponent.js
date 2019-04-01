import React, { Component } from 'react';
import { Tabs, Select, Input, Table, Divider, Tag, Modal, Button, Radio, List,Form } from 'antd';
import styles from './TabComponent.less';
const Option = Select.Option;
const Search = Input.Search;
const TabPane = Tabs.TabPane;
import router from 'umi/router';//路由引用
import { classNames } from 'classnames';
import ProjectTeam from './../../ProjectTeam';

class TabComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: styles.active,
      none: styles.none,
      value1: this.props.ListData.length,
      value2: this.props.StorageData.length,
      size: 'large',
      listVisible:false,
      storageVisible:false,
      listData: this.props.ListData,
      nowData: this.props.ListData,
      storageData: this.props.StorageData,
      nowStorage: this.props.StorageData,
      listType: Array.from(
        new Set(
          this.props.ListData.concat({
            title: '全部项目',
            id: this.props.ListData.length,
            isActive: false,
          }).map(item => {
            return item.title;
          })
        )
      ),
      storageType: Array.from(
        new Set(
          this.props.StorageData.concat({
            title: '全部项目',
            id: this.props.StorageData.length,
            isActive: false,
          }).map(item => {
            return item.title;
          })
        )
      ),
      nowText: '',
      type: Array.from(
        new Set(
          this.props.StorageData.map(item => {
            return item.title;
          })
        )
      ),
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      listData: nextProps.ListData,
      nowData: nextProps.ListData,
      storageData: nextProps.StorageData,
      nowStorage: nextProps.StorageData,
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
          return item.title == value;
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
        nowStorage: this.state.listData.filter(item => {
          return item.title == value;
        }),
      });
    } else {
      this.setState({
        nowStorage: this.state.listData,
      });
    }
  }
  listShowModal = text => {
    this.setState({
      listVisible: true,
      nowText: text,
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
  };
  
  listAdd(){
    router.push('/project/add');
  };
  listModify(){
    
    router.push('/project/add');
  }//router   
  listProTeam(){
    router.push('/project/projectteam');
  }                      
  storageDelList(text) {
    this.props.storageDel(text);
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
  };

  handleSelectChange = (value) => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  };
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
      {
        title: '项目名称',
        dataIndex: 'title',
        key: 'title',
        render: text => <a href="javascript:;">{text}</a>,
      },
      {
        title: 'Action',
        key: 'action',
        align: 'right',
        render: (text, record) => (
          <div>
            <a href="javascript:;" onClick={this.listModify.bind(this)}>修改{record.name}</a>
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
        dataIndex: 'title',
        key: 'title',
        render: text => <a href="javascript:;">{text}</a>,
      },
      {
        title: 'Action',
        key: 'action',
        align: 'right',
        render: (text, record) => (
          <span>
            <a href="javascript:;" className={styles.guohua} onClick={this.listProTeam.bind(this)}>项目队伍</a> 
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
                <span className={styles.qbrw}>全部任务/({this.state.value2})</span>
                <span className={styles.rwss}>任务筛选：</span>
                <Select
                  defaultValue={this.state.listType[3]}
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
              
              <Table columns={columns1} dataSource={this.state.nowData} />
            </TabPane>
            <TabPane tab="仓库中的任务" key="2">
              <div>
                <span className={styles.rwlb}>任务列表</span>
                <span className={styles.qbrw}>全部任务/({this.state.value2})</span>
                <span className={styles.rwss}>任务筛选：</span>
                <Select
                  defaultValue={this.state.storageType[3]}
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
          <p>{this.state.nowText.title}</p>
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
                placeholder="填写允许参加项目的队伍个数"
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
                placeholder="填写项目管理人"
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
                  onChange={this.handleSelectChange}
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
