var http=require('http')
var router=require('./04')
http.createServer((req,res)=>{
    console.log(req.url)
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    if(req.url=='/'){
        router.showIndex(req,res)
    }else if(req.url=='/kks'){
        router.showAbout(req,res)
    }else if(req.url=='/New'){
        router.showNew(req,res)
    }else{
        router.show404(req,res)
    }
}).listen(3000)