var http=require('http')
var fs=require('fs')
var url=require('url')
var fd=require('formidable')
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    if(req.url=='/favicon.ico'){
        return 
    }
    var query=url.parse(req.url,true).query
    console.log(query.name)
    if(query.name=='teacher'){
        res.end('这是老师，工号：'+query.gh.toString())
    }else if(query.name=="student"){
        res.end('这是学生，工号：'+query.gh.toString())
    }else{
        res.end('职业不对')
    }
}).listen(3000)