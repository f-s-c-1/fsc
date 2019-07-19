var http=require('http')
var fs=require('fs')
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    // fs.copyFile('./01.text','./02.text',(err)=>{
    //     res.end('a')
    // })
    //改名
    // fs.rename('./01.text','./11.text',(err)=>{
    //     res.end('改名成功')
    // })
    //删除
    // fs.unlink('./11.text',(err)=>{
    //     res.end('a')
    // })
    //创建目录
    // fs.mkdir('./aa',(err)=>{
    //     res.end('ss')
    // })
    //删除目录
    // fs.rmdir('./aa',(err)=>{
    //     res.end('ss')
    // })
    //读取目录
    // fs.readdir('../js',(err,data)=>{
    //     console.log(data)
    //     res.end('ss')
    // })
    //查看目录
    // fs.stat('./aa',(err,stats)=>{
    //     console.log(stats.isFile())
    //     console.log(stats.isDirectory())
    //     res.end('ss')
    // })
    //流
    var stream=fs.createReadStream('./02.text')
    var content=''
    stream.on('data',(chunk)=>{
        content+=chunk
    })
    stream.on("end",()=>{
        console.log(content)
        // fs.readFile('./02.text',(err,data)=>{
        //     console.log(data.toString())
        // })
    })
    res.end('文件读取完毕')
}).listen(3000)