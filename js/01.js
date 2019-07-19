var http=require('http')
var url=require('url')
var a='name=ss&pass=123456';
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    var query=url.parse(req.url).query
    console.log(query)
    if(query==a){
        res.end('登录成功')
    }else{
        res.end('登录失败')
    }
}).listen(3000)