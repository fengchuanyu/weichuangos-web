import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddListComponent from './AddListComponent';
import { Button, Modal, Form, Input, Radio } from 'antd';
import { runInThisContext } from 'vm';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        curList: [],
        reset:false,
      };
    }
    componentDidMount() {
      this.setState({
        curList: this.props.newCur,
      });
    }
    componentWillReceiveProps(nextProps) {
      console.log(nextProps);
      
      this.setState({
        curList: nextProps.newCur,
        reset:nextProps.Reset,
      });
    }
    setActive(item) {
      this.props.Active(item);
    }
    setItem(item, value) {
      this.props.Item(item, value);
    }
    del(item) {
      this.props.Del(item);
    }
    changeReset=(props)=>{
      this.setState({
        reset:props
      },()=>{
        this.props.changeReset(this.state.reset)
      })
    }
    setValue(item,value){
      this.props.Value(item,value);
    }
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="添加项目"
          okText="确定"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="项目类别">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: '请输入项目名称！' }],
              })(<Input />)}
            </Form.Item>
          </Form>
          <AddListComponent
            TagList={this.state.curList}
            Active={this.setActive.bind(this)}
            Item={this.setItem.bind(this)}
            Value={this.setValue.bind(this)}
            Del={this.del.bind(this)}
            cReset={this.state.reset}
            changeReset={this.changeReset}
          />
        </Modal>
      );
    }
  }
);

class AddComponent extends React.Component {
  state = {
    visible: false,
    reset:false,
    curList:[]
  };
  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);
    
  //   this.setState({
  //     curList: nextProps.newList,
  //   });
  // }
  showModal = () => {
    this.setState({ visible: true });
  };
  handleCancel = () => {
    const form = this.formRef.props.form;
    this.setState({ 
      visible: false,
      reset:true, 
    });
    form.resetFields();
  };
  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.setState({ 
        visible: false,
        reset:true,
       });
      form.resetFields();
      this.props.getValues(values.title);
    });
  };
  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  setActive(item) {
    this.props.Active(item);
  }
  setItem(item, value) {
    this.props.Item(item, value);
  }
  del(item) {
    this.props.Del(item);
  }
  changeReset=(props)=>{
    this.setState({
      reset:props,
    },()=>{
      console.log(this.state.reset);     

    })
  }
  setValue(item,value){
    this.props.Value(item,value);
  }
  render() {
    return (
      <span>
        <Button type="primary" onClick={this.showModal}>
          添加项目
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          newCur={this.props.newList}
          Active={this.setActive.bind(this)}
          Item={this.setItem.bind(this)}
          Del={this.del.bind(this)}
          Reset={this.state.reset}
          Value={this.setValue.bind(this)}
          changeReset={this.changeReset}
        />
      </span>
    );
  }
}

export default Form.create({ name: 'form_in_modal' })(AddComponent);
