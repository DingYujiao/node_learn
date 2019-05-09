exports.route= function(path){
  console.log(`request at ${path}`)
  let response = "测试";
  switch (path){
    case "/":
      response='首页';
      break;
    case '/test':
      response='测试';
      break;
    default:
  }
  return response;
}