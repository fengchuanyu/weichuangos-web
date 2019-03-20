import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    Button, Modal, Form, Input, Radio,
  } from 'antd';
  
  const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
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
  
        console.log('Received values of form: ', values);
        form.resetFields();
        this.setState({ visible: false });
      });
      
    }
  
    saveFormRef = (formRef) => {
      this.formRef = formRef;
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
          />
        </span>
      );
    }
  }


export default AddComponent;