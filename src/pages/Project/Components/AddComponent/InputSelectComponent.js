import React, { Component } from 'react';
import { Select } from 'antd';

const Option = Select.Option;

export default class InputSelectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: [],
      proClass:'',
      proClassName:'',
      proClassKey:''
    };
  }

  componentDidMount() {
    this.setState({
      option: this.props.newValues,
    });
  }

  componentWillReceiveProps(nextProps) { 
    // console.log(nextProps)
        this.setState({
        option: nextProps.newValues,
        proClassKey: nextProps.ProClass,
      },()=>{
        if(this.state.proClassKey!=''){
            if(this.state.option[this.state.proClassKey]){
              this.setState({
              proClassName:this.state.option[this.state.proClassKey].title
            })
          }
        }else {
          this.setState({
            proClassName:''
          })
        }
      
      });
    }

  selOnChange(val,option){
    console.log(val,option)
    this.setState({
      proClassName:val
    },()=>{
      this.props.TransmitProjectType(option.key)
    })
  }

  render() {
    const children = [];
    for (let i = 0; i < this.state.option.length; i++) {
      children.push(<Option key={i.toString(36)} value={this.state.option[i].title}>{this.state.option[i].title}</Option>);
    }

    return (
      <span>
        <Select
          showSearch
          style={{ width: 380 }}
          placeholder="微信小程序"
          value = {this.state.proClassName}
          onChange = {this.selOnChange.bind(this)}
          onBlur={this.handleBlur}
        >
          {children}
        </Select>
      </span>
    );
  }
}
