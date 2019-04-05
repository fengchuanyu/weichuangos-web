const list = [    // title  目前是项目类型，需新添加一个变量代表项目名称   // id 是  项目编号，自增生成
  { 
    proName : 'test1',
    proClass : 'class1',
    proNum : '1',
    proStack : 'es6',
    proInfo : 'successsuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccess',
     id: 1, 
    isActive: false 
  },
  { 
    proName : 'test1',
    proClass : 'class1',
    proNum : '1',
    proStack : 'es6',
    proInfo : '<p>1</p>', id: 2, 
    isActive: false 
  },{ 
    proName : 'test1',
    proClass : 'class1',
    proNum : '1',
    proStack : 'es6',
    proInfo : 'success', id: 3, 
    isActive: false 
  },{ 
    proName : 'test1',
    proClass : 'class1',
    proNum : '1',
    proStack : 'es6',
    proInfo : 'success', id: 4, 
    isActive: false 
  },{ 
    proName : 'test1',
    proClass : 'class1',
    proNum : '1',
    proStack : 'es6',
    proInfo : 'success', id: 5, 
    isActive: false 
  },
  ];
const storageData = [
    { 
      proName : 'test1',
      proClass : 'class1',
      proNum : '1',
      proStack : 'es6',
      proInfo : 'success', id: 1, 
      isActive: false 
    },
    { 
      proName : 'test1',
      proClass : 'class1',
      proNum : '1',
      proStack : 'es6',
      proInfo : 'success', id: 2, 
      isActive: false 
    },{ 
      proName : 'test1',
      proClass : 'class1',
      proNum : '1',
      proStack : 'es6',
      proInfo : 'success', id: 3, 
      isActive: false 
    },{ 
      proName : 'test1',
      proClass : 'class1',
      proNum : '1',
      proStack : 'es6',
      proInfo : 'success', id: 4, 
      isActive: false 
    },{ 
      proName : 'test1',
      proClass : 'class1',
      proNum : '1',
      proStack : 'es6',
      proInfo : 'success', id: 5, 
      isActive: false 
    },
  ];

const projectinfo = [
  {
    proName : 'test1',
    proClass : 'class1',
    proNum : '1',
    proStack : 'es6',
    proInfo : 'successsuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccess'
  },
  {
    proName : 'test1',
    proClass : 'class1',
    proNum : '1',
    proStack : 'es6',
    proInfo : 'success'
  },  {
    proName : 'test1',
    proClass : 'class1',
    proNum : '1',
    proStack : 'es6',
    proInfo : 'success'
  },  {
    proName : 'test1',
    proClass : 'class1',
    proNum : '1',
    proStack : 'es6',
    proInfo : 'success'
  },  {
    proName : 'test1',
    proClass : 'class1',
    proNum : '1',
    proStack : 'es6',
    proInfo : 'success'
  },  {
    proName : 'test1',
    proClass : 'class1',
    proNum : '1',
    proStack : 'es6',
    proInfo : 'success'
  },
]

function getprojectList(req,res){
    // let str = ''
    // str += req.params ('')
    return res.json ({
        list,
        storageData,
        projectinfo
    })
}
function postDelProjectList(req,res){
  return res.json({
    list,
  })
}
function postDelProjectStorage(req,res){
  return res.json({
    storageData,
  })
}
function postCommit(req,res){
  return res.json({
    storageData,
  })
}
export default {
    'POST /api/getProjectList': getprojectList,
    'POST /api/postDelProjectList':postDelProjectList,
    'POST /api/postDelProjectStorage':postDelProjectStorage,
    'POST /api/postCommit':postCommit,
};