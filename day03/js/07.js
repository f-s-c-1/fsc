var http=require('http')
var fs=require('fs')
var path=require('path')
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    fs.readdir('../../day03',(err,data)=>{
        var a=data
        //let方法
        // for(let i=0;i<a.length;i++){
        //     var sta="../../day03/"+a[i]
        //     fs.stat(sta,(err,stats)=>{
        //         if(stats.isDirectory()){
        //             console.log(a[i])
        //         }
        //     })
        // }
        //forEach方法
        data.forEach(function(a,index){
            var sta="../../day03/"+a
            fs.stat(sta,(err,stats)=>{
                if(stats.isDirectory()){
                    console.log(a)
                }
            })
        })
    })
    res.end('接收成功')
}).listen(3000)