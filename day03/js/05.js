var http=require('http')
var express=require('express')
var as=express()
as.get('/new',(req,res)=>{
    console.log(req.query)
    res.send('接收成功')
})
as.listen(3000)