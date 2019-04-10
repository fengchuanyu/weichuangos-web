const list = [
    { title: '微信小程序', id: 1, isActive: false },
    { title: '移动端开发', id: 2, isActive: false },
    { title: 'Vue', id: 3, isActive: false },
]

function getClassList(req,res){
    return res.json ({
        list,
    })
}

export default {
    'POST /api/getClassTypeList': getClassList,

}