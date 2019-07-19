****/////77//var http=require("http")
var path=require('path')
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    //path.resolve() 会将最后一个参数转换成绝对路径   webpack
     var oldpath=path.resolve("./js/aaa/bb")
    //////path.normalize() 路径的格式化
    // var oldpath=path.normalize("/a/b//c///d")
    //path.extname() 获取文件的扩展名
    //var oldpath=path.extname("55452.html")
    //path.format()。23/
    /*var oldpath=path.format({
     *   root:"sad",
     *   dir:"c:\a\b",
     *   base:"\d"
    })*/
    console.log(oldpath)
    res.end()
}).listen(3000)