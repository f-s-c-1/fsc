var http=require('http')
var express=require('express')
var path=require('path')
var as=express()
var publicpath=path.resolve(__dirname,"html")
console.log(publicpath)
as.use(express.static(publicpath))
as.listen(3000)