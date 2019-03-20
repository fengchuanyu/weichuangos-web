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
            path: '/project/add',//二级目录
            name: 'add',
            icon: 'setting',
            component: './project/add',
          },
          
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
