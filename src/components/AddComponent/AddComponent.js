import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddListComponent from '@/components/AddComponent/AddListComponent'
import {
    Button, Modal, Form, Input, Radio,
  } from 'antd';
import { runInThisContext } from 'vm';
  
  const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
      constructor(props){
        super(props);
        this.state={
          curList:[]
        }
      }
      componentDidMount(){
        console.log(this.props.newCur);
        
        this.setState({
          curList:this.props.newCur
        })
      }
      componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({
          curList:nextProps.newCur
        })
        
      }
      setActive(item){
        this.props.Active(item);
      }
      setItem(item,value){
        this.props.Item(item,value)
      }
      del(item){
        this.props.Del(item)
      }
      render() {
        const {
          visible, onCancel, onCreate, form,
        } = this.props;
        const { getFieldDecorator } = form;
        return (
          <Modal
            visible={visible}
            title="添加项目"
            okText="Create"
            onCancel={onCancel}
            onOk={onCreate}
          >
            <Form layout="vertical">
              <Form.Item label="项目类别">
                {getFieldDecorator('title', {
                  rules: [{ required: true, message: '请输入项目名称！' }],
                })(
                  <Input />
                )}
              </Form.Item>
            </Form>
            <AddListComponent TagList={this.state.curList} Active={this.setActive.bind(this)} Item={this.setItem.bind(this)} Del={this.del.bind(this)}/>
          </Modal>
        );
      }
    }
  );
  
  class AddComponent extends React.Component {
    state = {
      visible: false,
      
    };
    showModal = () => {
      this.setState({ visible: true });

    }
  
    handleCancel = () => {
      this.setState({ visible: false });
    }
  
    handleCreate = () => {
      const form = this.formRef.props.form;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }
        this.setState({ visible: false});
        form.resetFields();
        this.props.getValues(values.title);      
      });
    }
    saveFormRef = (formRef) => {
      this.formRef = formRef;
    }
    setActive(item){
      this.props.Active(item);
    }
    setItem(item,value){
      this.props.Item(item,value);
    }
    del(item){
      this.props.Del(item);
    }
    render() {

      return (
        <span>
          <Button type="primary" onClick={this.showModal}>添加项目</Button>
          <CollectionCreateForm
            wrappedComponentRef={this.saveFormRef}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}   
            newCur={this.props.newList} 
            Active={this.setActive.bind(this)}   
            Item={this.setItem.bind(this)}
            Del={this.del.bind(this)}
          />
        </span>
      );
    }
  }


export default AddComponent;