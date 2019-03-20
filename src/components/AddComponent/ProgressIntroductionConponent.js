import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'

export default class ProgressIntroductionConponent extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState(null)
  }

  
  render () {
    var styleInput = {
      height: '200px' ,
      background:'#ffffff',
    }
    var styleTool = {
      background:'#ffffff',    
      height:'100px'
    }
    // var styleEditor = {
    //   width:'468px',
    // }
    return (
      <BraftEditor 
      // style = {styleEditor}
      controlBarStyle = {styleTool}
      contentStyle={styleInput} 
      value={this.state.editorStste} 
      onChange={this.handleChange}/>
    )
  }

  handleChange = (editorStste) => {
    this.setState({ editorStste })
  }

}