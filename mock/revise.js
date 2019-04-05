function postReviseInfo (req,res){
    let str = '';
    // str+=req.param('test');
    return res.json({
        proName:'sdsa ',
        proClass:'移动端开发',
        proClassArray:[{title: "微信小程序", id: 1, isActive: false},
                        {title: "移动端开发", id: 2, isActive: false},
                        {title: "Vue", id: 3, isActive: false}],
        proNumber:"saddsad1231",
        proStackArray:"ES6,React,jQuery",
        proIntroduction:'<p>sad 12315</p>',
    })
}

 
export default {
    'POST /api/getReviseInfo': postReviseInfo,
  };