import React, { Component } from 'react';
import { Button } from 'antd';

import  { connect } from 'dva';

@connect((submitpro) => {
  return ({
    submitpro, 
  })
})

export default class ButtonComponent extends Component {

  constructor(props){
    super(props)
    this.state={
      proName:'',
      proClass:'',
      proClassArray:[],
      proNumber:'',
      proStack:'',
      proStackArray:[],
      proIntroduction:'',
    }
  }

  reset = () =>{

  }
  // componentDidUpdate(){
  //   console.log(this.props)
  // }
  componentWillReceiveProps(nextProps){
    this.setState({
      proName : nextProps.PropsProjectName,
      proNumber : nextProps.PropsProjectNumber,
      proStack : nextProps.PropsProjectStack,
      proStackArray : nextProps.PropsProjectStackArray,
      proClass : nextProps.PropsProjectClassType,
      proClassArray : nextProps.PropsProjectTypeArray,
      proIntroduction : nextProps.PropsIntroduce
      })
      // console.log(nextProps)

  }

  submit = () =>{
    if(this.state.proName!='' && this.state.proClass!=[] && this.state.proNumber!='' &&
       this.state.proStack != [] && this.state.proIntroduction!=''){
          const { dispatch } = this.props;
          console.log(this.props)
          dispatch({
            type:'subpro/submitPro',
              payload:{
                sendName:this.state.proName,
                sendClass:this.state.proClass,
                sendClassArray:this.state.proClassArray,
                sendNumber:this.state.proNumber,
                sendStack:this.state.proStack,
                sendStackArray:this.state.proStackArray,
                sendIntroduction:this.state.proIntroduction,
          } 
         })
      }else {
        alert('false')
      }
  }

  render() {
    return (
      <div style={{ marginTop: 70, marginLeft: 39 + '%' }}>
        <Button icon="check-circle" style={{ marginRight: 50 }}
          onClick = {this.submit}>
          提交
        </Button>
        <Button icon="close-circle" onClick = {this.reset}>取消</Button>
      </div>
    );
  }
}
