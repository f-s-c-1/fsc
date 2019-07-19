var express=require('express')
var cookieParser=require('cookie-parser')
var app=express()
app.use(cookieParser('123456'))
app.get('/set',(req,res)=>{
    res.cookie("username","tom",{maxAge:200000,httpOnly:true,signed:true})
    res.send("cookie设置成功")
})
app.get('/get',(req,res)=>{
    var name=req.signedCookies.username
    console.log(name)
    res.send("读取成功"+name)
})
app.listen(3000)