var http=require('http')
var url=require('url')
http.createServer((req,res)=>{
    var query=url.parse(req.url,true).query
    var admin={
        username:"admin",
        pass:'123456'
    }
    if(req.url=="/favicon.ico"){
        return
    }
    console.log(query)
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    if(query.name==admin.username&&query.pass==admin.pass){
        res.end("登录成功")
    }else{
        res.end("登录失败")
    }
}).listen(3000)