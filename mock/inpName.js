function postInputName(req,res){
  let str = '';
  str+=req.param('status');
  return res.json({
      timestamp:46451321,
      status:403,
      testreq:str
  })
}
 


export default {
  'POST /api/getProjectName': postInputName,   //返回值是json
};