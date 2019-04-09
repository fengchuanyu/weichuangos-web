
function postAddSubmit (req,res){
    let str = '';
    // str+=req.param('test');
    return res.json({
        proName:'sdsa ',
        proClass:'sad as',
        proClassArray:[],
        proNumber:'',
        proStack:'',
        proStackArray:[],
        proIntroduction:'',
        id:undefined
    })
}

 
export default {
    'POST /api/getAddProjectInfo': postAddSubmit,
};