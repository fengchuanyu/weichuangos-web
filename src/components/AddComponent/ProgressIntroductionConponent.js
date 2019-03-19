import React, { Component } from 'react'
import { Input } from 'antd';
const { TextArea } = Input;

export default class ProgressIntroductionConponent extends Component {
  render() {
    return (
      <div>
        <TextArea rows={4} />
      </div>
    )
  }
}
