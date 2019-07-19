var http=require('http')
var fs=require('fs')
var fd=require('formidable')
var sd=require('silly-datetime')
var path=require('path')
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    if(req.url=="/dopost") {
        var form=new fd.IncomingForm() 
        form.uploadDir ='./img'
        form.parse(req,function(err,fields,files){
            var oldpath=files.pic.path;
            var extname=path.extname(files.pic.name)
            var ss=sd.format(new Date(),"YYYYMMDDhhmmss")
            var newpath='img/'+ss+extname
            console.log(newpath)
            fs.rename(oldpath,newpath,(err)=>{
                 res.end('cg')
            })
        })
    }
}).listen(3000)