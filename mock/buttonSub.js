
function postSubmit (req,res){
    let str = '';
    str+=req.param('test');
    return res.json({
        tempStamp:12346551,
        status:403,
        returnNum:str
    })
}


export default {
    'POST /api/submitProject': postSubmit,
  };