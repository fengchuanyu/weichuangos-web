import React, { Component } from 'react'
import { Button } from 'antd';
export default class ButtonComponent extends Component {
  render() {
    return (
      <div>
        <Button icon='check-circle'>确认</Button><Button icon='close-circle'>取消</Button>
      </div>
    )
  }
}
