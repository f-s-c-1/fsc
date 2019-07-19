var http=require('http')
var fs=require('fs')
var ejs=require('ejs')
http.createServer((req,res)=>{
    var datas={
        "list":[
            {
                name:'lufei',
                age:'18'
            },{
                name:'suolong',
                age:'20'
            }
        ]
    }
    fs.readFile('./mb.ejs',(err,data)=>{
        var reu=data.toString()
        var result=ejs.render(reu,datas)
        res.end(result)
    })
}).listen(3000)