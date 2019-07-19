//模块抛出
function showIndex(req,res){
    res.end('首页')
}
function showAbout(req,res){
    res.end('关于')
}
function showNew(req,res){
    res.end('新闻')
}
function show404(req,res){
    res.end('404')
}
exports.showIndex=showIndex
exports.showAbout=showAbout
exports.showNew=showNew
exports.show404=show404