var express=require('express')
var art=require('express-art-template')
var router=express.Router()
var app=express()
app.use(router)
router.get("/",(req,res)=>{
    res.send('success:ok')
})
router.get("/getcode",(req,res)=>{
    var randonNum=function(min,max){
        return Math.ceil(Math.random()*(max-min)+min)
    }
    var str="asdwdhaskjdhuwdwahdjkahfjsguwoiufhaskjfhkwj1234567890"
    var result=''
    for(var i=0;i<4;i++){
        result+=str[randonNum(0,str.length-1)]
    }
    res.send("data:"+ result)
})
app.listen(3000)