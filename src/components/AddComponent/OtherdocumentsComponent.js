// 本页面随意修改
import React, { Component } from 'react'
import {
  Upload, message, Button, Icon,
} from 'antd';

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file.name);  // 文件名
      // console.log( info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default class OtherdocumentsComponent extends Component {
  render() {
    return (
      <div>
        <Upload {...props}>
              <Button>
                  <Icon type="upload" /> 上传文件
              </Button>
        </Upload>
      </div>
    )
  }
}
