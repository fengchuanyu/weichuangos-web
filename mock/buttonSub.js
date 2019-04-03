
function postSubmit (req,res){
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
    })
}

 
export default {
    'POST /api/submitProject': postSubmit,
  };