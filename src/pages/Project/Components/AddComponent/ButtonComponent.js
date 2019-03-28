import React, { Component } from 'react';
import { Button } from 'antd';

import  { connect } from 'dva';

@connect((submitpro) => {
  return ({
    submitpro, 
  })
})

export default class ButtonComponent extends Component {
 
  submit = () =>{
    const { dispatch } = this.props;
    dispatch({
      type:'subpro/submitPro',
      payload:{test:'sssss'}
    })
  }


  render() {
    return (
      <div style={{ marginTop: 70, marginLeft: 39 + '%' }}>
        <Button icon="check-circle" style={{ marginRight: 50 }}
          onClick = {this.submit}>
          提交
        </Button>
        <Button icon="close-circle">取消</Button>
      </div>
    );
  }
}
