import {
    Button, Modal, Form, Input, Radio,
  } from 'antd';
import React, { Component } from 'react'
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
            title="修改项目类别"
            okText="change"
            onCancel={onCancel}
            onOk={onCreate}
          >
            <Form layout="vertical">
              <Form.Item label="修改项目类别">
                {getFieldDecorator('title', {
                  rules: [{ required: true, message: 'Please input the type of project!' }],
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
  export default class AddListChangeComponent extends Component {
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
          form.resetFields();
          this.props.changeValue(values.title);
          this.setState({ visible: false });
        });
      }
    
      saveFormRef = (formRef) => {
        this.formRef = formRef;
      }
    render() {
      return (
        <div>
          <Button type="primary" onClick={this.showModal}>修改</Button>
          <CollectionCreateForm
            wrappedComponentRef={this.saveFormRef}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
          />
        </div>
      )
    }
  }
  
