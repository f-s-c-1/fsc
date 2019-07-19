var express=require('express')
var path=require('path')
var bodyParser=require('body-parser')
var publicPath=path.resolve(__dirname,"html")
var app=express()
//处理json数据的请求
app.use(bodyParser.json())
//处理字符串
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(publicPath))
app.get('/',(req,res)=>{
    res.send('首页')
})
app.post('/dopost',(req,res)=>{
    var body=req.body
    console.log(body)
    res.send('post数据传输')
})
app.listen(3000)
