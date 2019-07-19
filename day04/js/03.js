var express=require('express')
var art=require('express-art-template')
var app=express()
app.engine('art',art)
app.get('/',(req,res)=>{
    res.render('new.art',{
        //.art 必须写上，不然不能识别
        list:["1","2","3"]
    })
})
app.listen(3000)