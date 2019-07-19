var express=require('express')
var app=express()
var fs=require('fs')
// app.engine('views engine',"ejs")
//engine 引擎
app.set("view engine","ejs")
// app.set('views',__dirname+"/views")
app.get('/',function(req,res){
    res.render("02.ejs",{
        list:["1","2","3"]
    })
})
app.listen(3000)