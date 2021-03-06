import React, { Component } from 'react';
import { List, Typography } from 'antd';
import { Button } from 'antd';
import { Tag } from 'antd';
import styles from './AddList.less';
import { Form, Input, Checkbox } from 'antd';
const AddListComponent = Form.create({ name: 'form_in_modal' })(
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        list: [],
        value: '',
        checkNick: false,
      };
    }
    handleSubmit = (item, value) => {
      this.props.form.validateFields((err, values) => {
        if (err) {
          return;
        } else {
          this.props.Value(item, value);
        }
      });
      console.log('addlist-handleSubmit');
    };
    componentDidMount() {
      
      this.setState({
        list: this.props.TagList,
      });
      console.log('addlist-componentDidMount');
    }
    componentWillReceiveProps(nextProps) {
      // console.log(nextProps);
      console.log('addlist-componentWillReceiveProps');
      this.setState({
        list: nextProps.TagList,
        reset:nextProps.cReset
      },()=>{
        console.log(this.state.list);
        
        if(this.state.reset){
        const form = this.props.form;
        form.resetFields();
        let arr = this.state.list.map((item)=>{
          item.isActive=false;
          return item;
          })
        this.setState({
          list: arr,
          reset:false,
        },()=>{
          this.props.changeReset(this.state.reset);
        })
      }
    });
    }
    setActive(item) {
      console.log('addlist-setActive');
      this.props.Active(item);
    }
    changeValue = (item, e) => {
      console.log('addlist-changeValue');
      if (e.target.value == '') {
        this.setState({
          value: item.title,
        });
      } else {
        this.setState({
          value: e.target.value,
        });
      }
    };
    del(item) {
      console.log('addlist-del');
      this.props.Del(item);
    }
   
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <div>
          <List
            size="small"
            bordered
            dataSource={this.state.list}
            renderItem={item => (
              <List.Item className={styles.listItem} key={item.id}>
                <div className={item.isActive ? styles.none : styles.active}>
                  <Tag color="#108ee9">{item.title}</Tag>
                  <Button color="#1890ff" onClick={() => this.setActive(item)}>
                    修改
                  </Button>
                  <Button type="danger" onClick={() => this.del(item)}>
                    删除
                  </Button>
                </div>
                <div className={item.isActive ? styles.listActive : styles.addList}>
                  <Form>
                    <Form.Item className={styles.attention}>
                      {getFieldDecorator('note', {  
                        rules: [{ required: true, message: '项目名称不能为空' }],
                      })(<Input type="text" onChange={this.changeValue.bind(this, item)}/>)}
                    </Form.Item>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        color="#1890ff"
                        icon="check"
                        shape="circle"
                        onClick={() => this.handleSubmit(item, this.state.value)}
                        className={styles.inline}
                      />
                    </Form.Item>
                  </Form>
                </div>
              </List.Item>
            )}
          />
        </div>
      );
    }
  }
);
export default AddListComponent;
