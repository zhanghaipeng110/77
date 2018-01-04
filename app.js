var express=require("express")
var data=require('./data/data.json')
var app=express()
//设置模板引擎为ejs
app.set('view engine','ejs')
app.use('/',express.static('public')) 


app.use('/',require('./routes/index'))
app.use('/speakers',require('./routes/speakers'))
app.use('/feedback',require('./routes/feedback'))



app.listen(3001)
