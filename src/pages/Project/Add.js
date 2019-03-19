import React, { Component } from 'react'
import SelectComponent from '@/components/AddComponent/SelectComponent'
export default class Add extends Component {
  render() {
    return (
      <div>
        <h2>项目编辑</h2>
        <SelectComponent/>
      </div>
    )
  }
}
