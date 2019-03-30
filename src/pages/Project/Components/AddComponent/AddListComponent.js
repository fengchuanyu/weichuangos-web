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
          this.props.Item(item, value);
        }
      });
    };
    componentDidMount() {
      this.setState({
        list: this.props.TagList,
      });
    }
    componentWillReceiveProps(nextProps) {
      this.setState({
        list: nextProps.TagList,
      });
    }
    setActive(item) {
      this.props.Item(item);
    }
    changeValue = (item, e) => {
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
                      })(<Input type="text" onChange={this.changeValue.bind(this, item)} />)}
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
