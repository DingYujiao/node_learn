var http = require('http');//这个是http服务器模块
var url = require('url');//这个是解析url的模块


let start = function(route){
  const serverOption = {
    port: 8080,
  }
  function onResuest(request,response){
    // console.log(request)
    let pathName = url.parse(request.url).pathname;
    let result = route(pathName)
    response.setHeader("Content-type", "text/html;charset=UTF-8");
    response.write(result);
    response.end()
  }
  http.createServer(onResuest).listen(serverOption.port)
  console.log(`Server running at http://127.0.0.1:${serverOption.port}/`);

}
exports.start = start