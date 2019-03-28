import React, { Component } from 'react'
import { Button } from 'antd';

import {connect}  from  'dva';

@connect((projectName,loading)=>{
  return ({
    projectName,
  })
})


export default  class ButtonComponent extends Component {
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
    this.submit = this.submit.bind(this)
  }

  submit(){
    this.setState({
      proNumber : this.props.PropsProjectNumber
    })
    if(this.state.proName!='' && this.state.proClass!=[] && this.state.proNumber!='' &&
       this.state.proStack != [] && this.state.proIntroduction!=''){
         
      const { dispatch } = this.props;
      dispatch({ 
        type:'projectName/getInputName',
        payload:{status:'success'}
      })
    }
    else {
      // alert('false')
    }
   
  }

  reset(){

  }


  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    this.setState({
      proName:nextProps.PropsProjectName,
      proNumber : nextProps.PropsProjectNumber,
      proStack:nextProps.PropsProjectStack,
      proStackArray:nextProps.PropsProjectStackArray,
      proClass:nextProps.PropsProjectClassType,
      proClassArray:nextProps.PropsProjectTypeArray
      })
      // console.log(this.state.proNumber)
  }

  render() {
    return (
      <div>
        <Button icon='check-circle' onClick = {this.submit}>确认</Button>
        <Button icon='close-circle' onClick = {this.reset}>取消</Button>
      </div>
    )
  }
}

