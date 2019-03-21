/*
 * @Author: Why-WU
 * @LastEditors: Why-WU
 * @Description:岗位选择
 * @Date: 2019-03-20 15:16:22
 * @LastEditTime: 2019-03-22 01:44:36
 * label值不能相同
 */

import { Select, Cascader } from 'antd';

const Option = Select.Option;
const options = [
  {
    value: 'web全栈老师',
    label: 'web全栈老师',
  },
  {
    value: 'UI老师',
    label: 'UI老师',
  },
  {
    value: '大数据老师',
    label: '大数据老师',
  },
  {
    value: 'Java老师',
    label: 'Java老师',
  },
  {
    value: '招生老师',
    label: '招生老师',
  },
  {
    value: '班主任',
    label: '班主任',
  },
  {
    value: '助教老师',
    label: '助教老师',
  },
];

function handleChange(value) {
  console.log(`selected ${value}`);
}

class JobSelection extends React.Component {
  render() {
    return (
      <div>
        <Cascader style={{ width: '30%' }} options={options} placeholder="选择岗位"  />
      </div>
    );
  }
}
export default JobSelection;
