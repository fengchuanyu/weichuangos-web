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
      console.log('addcomponent-componentdidmont')
    }
    componentWillReceiveProps(nextProps) {
      console.log(nextProps.newCur);
      this.setState({
        curList: nextProps.newCur,
        reset:nextProps.Reset,
      },()=>{
        console.log(this.state.curList);
        
      });
      console.log('addcomponent-componentwillreceiveprops')
    }
    setActive(item) {
      this.props.Active(item);
      console.log('addcomponent-setactive')
    }
    setItem(item, value) {
      this.props.Item(item, value);
      console.log('addcomponent-setitem')
    }
    setActive(item) {
      this.props.Active(item);
      console.log('addcomponent-setActive')
    }
    del(item) {
      this.props.Del(item);
      console.log('addcomponent-del')
    }
    changeReset=(props)=>{
      this.setState({
        reset:props
      },()=>{
        this.props.changeReset(this.state.reset)
      })
      console.log('addcomponent-changereset')
    }
    setValue(item,value){
      this.props.Value(item,value);
      console.log('addcomponent-setvalue')
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
            Active={this.setActive.bind(this)}
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
    console.log('addcomponent-showmodal')
  };
  handleCancel = () => {
    const form = this.formRef.props.form;
    this.setState({ 
      visible: false,
      reset:true, 
    });
    form.resetFields();
    console.log('addcomponent-handlecancel')
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
    console.log('addcomponent-handlecreate')
  };
  saveFormRef = formRef => {
    this.formRef = formRef;
    console.log('addcomponent-saveformref')
  };
  setActive(item) {
    this.props.Active(item);
    console.log('addcomponent-setactive')
  }
  setItem(item, value) {
    this.props.Item(item, value);
    console.log('addcomponent-setitem')
  }
  setActive(item){
    this.props.Active(item);
  }
  del(item) {
    this.props.Del(item);
    console.log('addcomponent-del')
  }
  
  changeReset=(props)=>{
    this.setState({
      reset:props,
    },()=>{
      // console.log(this.state.reset);     
    })
    console.log('addcomponent-changereset')
  }
  setValue(item,value){
    this.props.Value(item,value);
    console.log('addcomponent-setvalue')
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
