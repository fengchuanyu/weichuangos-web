import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React from 'react';
import { Button, notification, Card, Divider } from 'antd';
import styles from './ProgressIntroductionConponent.less';

export default class ProgressIntroductionConponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
    console.log(value);
  }

  render() {
    return (
      <div style={{marginLeft:26+'%'}}>
        <span>项目描述:</span>
        <ReactQuill  value={this.state.text} onChange={this.handleChange}>
          {/* <div  className="my-editing-area"></div> */}
        </ReactQuill>
      </div>
    );
  }
}
