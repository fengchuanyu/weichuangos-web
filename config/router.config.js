export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      { path: '/', redirect: '/project/add' }, //这是首页
      {
        path: '/project', //一级目录
        icon: 'project',
        name: 'project',
        routes: [
          {
            path: '/project/add',//二级目录项目编辑
            name: 'add',
            icon: 'setting',
            component: './project/add',
          },
          {
            path: '/project/list',//二级目录列表
            name: 'list',
            icon: 'ordered-list',
            component: './project/list',
          },
          {
            path: '/project/projectteam',//二级目录项目组
            name: 'projectteam',
            icon: 'team',
            component: './project/projectteam',
          },
        ],
      },
      {
        path:'/worker',
        icon:'project',
        name:'worker',
        routes:[
          {
            path:'/worker/addmodification',
            name:'addmodification',
            icon:'setting',
            component:'./worker/addmodification'
          },
          {
            path:'/worker/workerlist',
            name:'workerlist',
            icon:'setting',
            component:'./worker/workerlist'
          }
        ]
      },
      {
        component: '404',
      },
    ],
  },
];
