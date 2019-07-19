var http=require('http')
var fs=require('fs')
var art=require('art-template')
http.createServer((req,res)=>{
    var str={
        list:["1","2","3"]
    }
    fs.readFile('./02.art',(err,data)=>{
        var str1=data.toString()
        var result=art.render(str1,str)
        res.end(result)
    })
}).listen(3000)