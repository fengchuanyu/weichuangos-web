import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';  
import React from 'react';
import { Button, notification, Card } from 'antd';


export default class ProgressIntroductionConponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } 
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(value) {
    this.setState({ text: value })
    console.log(value);
  }
  
  render() {
    return (
      <ReactQuill value={this.state.text}
                  onChange={this.handleChange}
                  >
                  {/* <div  className="my-editing-area"></div> */} 
      </ReactQuill>
    )
  }
} 
/*onBlur={this.handleChange}*/