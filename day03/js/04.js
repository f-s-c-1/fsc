var express=require("express")
var app=express()
//相当于执行一个get请求
// app.get("/",(req,res)=>{
//     res.send({"success":"ok"})
// })
//在express当中路径不区分大小写，同时支持链式操作
// app.get("/about",(req,res)=>{
//     res.send("about")
// }).get("/news",(req,res)=>{
//     res.send("news")
// })
// //获取路由的动态参数
app.get('/about/:id',(req,res)=>{
    res.send("路由接收的参数为："+req.params.id)
})
app.listen(3000)