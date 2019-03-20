/*
 * @Author: Why-WU
 * @LastEditors: Why-WU
 * @Description:隶属部门选择
 * @Date: 2019-03-20 15:16:22
 * @LastEditTime: 2019-03-20 17:05:08
 * label值不能相同
 */

import { Select, Cascader } from 'antd';

const Option = Select.Option;
const options = [
  {
    value: '部门1',
    label: '部门1',
  },
  {
    value: '部门2',
    label: '部门2',
  },
  {
    value: '部门3',
    label: '部门3',
  },
  {
    value: '部门4',
    label: '部门4',
  },
  {
    value: '部门5',
    label: '部门5',
  },
  {
    value: '部门6',
    label: '部门6',
  },
  {
    value: '部门7',
    label: '部门7',
  },
];

class Departments extends React.Component {
  render() {
    return (
      <div>
        <Cascader style={{ width: '30%' }} options={options} placeholder="选择隶属部门" />
      </div>
    );
  }
}
export default Departments;
