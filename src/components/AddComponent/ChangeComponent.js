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
        
      }
      
      render() {
        const {
          visible, onCancel, onCreate, form,
        } = this.props;
        const { getFieldDecorator } = form;
        return (
          <Modal
            visible={visible}
            title="修改项目"
            okText="Create"
            onCancel={onCancel}
            // onOk={onCreate}
          >
            
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
      });
    }
    saveFormRef = (formRef) => {
      this.formRef = formRef;
    }
    
    render() {

      return (
        <span>
          <Button type="primary" onClick={this.showModal}>修改项目</Button>
          <CollectionCreateForm
            wrappedComponentRef={this.saveFormRef}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            // onCreate={this.handleCreate}   
            
          />
        </span>
      );
    }
  }


export default AddComponent;