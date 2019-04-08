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
      id:undefined,
    }
  }

  reset = () =>{

  }
  componentWillReceiveProps(nextProps){
    this.setState({
      id:nextProps.PropsProjectId,
      proName : nextProps.PropsProjectName,
      proNumber : nextProps.PropsProjectNumber,
      proStack : nextProps.PropsProjectStack,
      proStackArray : nextProps.PropsProjectStackArray,
      proClass : nextProps.PropsProjectClassType,
      proClassArray : nextProps.PropsProjectTypeArray,
      proIntroduction : nextProps.PropsIntroduce
      })
  }

  submit = () =>{
    if(this.state.proName!='' && this.state.proClass!=[] && this.state.proNumber!='' &&
       this.state.proStackArray != [] && this.state.proIntroduction!=''){
          if(this.state.id!=undefined){
              const { dispatch } = this.props;
              console.log(this.props)
              dispatch({
                type:'addsubpro/addSubmitPro',
                  payload:{
                    sendId:this.state.id,
                    sendName:this.state.proName,
                    sendClass:this.state.proClass,
                    sendClassArray:this.state.proClassArray,
                    sendNumber:this.state.proNumber,
                    sendStack:this.state.proStack,
                    sendStackArray:this.state.proStackArray,
                    sendIntroduction:this.state.proIntroduction,
                  }
                })
               }
               else {
                const { dispatch } = this.props;
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
               }
            }else {
                alert('false');
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
