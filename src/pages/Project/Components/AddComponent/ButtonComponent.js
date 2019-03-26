import React, { Component } from 'react';
import { Button } from 'antd';
export default class ButtonComponent extends Component {
  render() {
    return (
      <div style={{ marginTop: 70, marginLeft: 39 + '%' }}>
        <Button icon="check-circle" style={{ marginRight: 50 }}>
          确认
        </Button>
        <Button icon="close-circle">取消</Button>
      </div>
    );
  }
}
