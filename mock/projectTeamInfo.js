const data = [
    {key: '项目名称:', value: 'test1'},
    { key: '组长:', value: 'ehrthbt' },
    { key: '组员:', value: 'htrhtr' },
    { key: '组内人数:', value: 'htrhtr' },
    { key: '报选项目:', value: '微信小程序' },
    { key: '项目报选时间:', value: 'htrhtr' },
];
const data1 = [
    {key: '项目名称:', value: 'test2'},
    { key: '组长:', value: 'ehrthbt' },
    { key: '组员:', value: 'htrhtr' },
    { key: '组内人数:', value: 'htrhtr' },
    { key: '报选项目:', value: '微信小程序' },
    { key: '项目报选时间:', value: 'htrhtr' },
];
const datas = [
    { id: 1, data: data1 },
    { id: 2, data: data },
    { id: 3, data: data },
    { id: 4, data: data },
    { id: 5, data: data },
    { id: 6, data: data },
    { id: 7, data: data },
    { id: 8, data: data },
    { id: 9, data: data },
];

const list = [
    { title: '微信小程序', id: 1, isActive: false },
    { title: '移动端开发', id: 2, isActive: false },
    { title: 'Vue', id: 3, isActive: false },
  ];

function getprojectteam(req,res){
    let str = '';
    return res.json ({
        // data,
        datas,
        list
    })
}

export default {
    'POST /api/getProjectTeam': getprojectteam,   //返回值是json
};