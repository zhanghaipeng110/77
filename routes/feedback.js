var express=require("express")
var routes=express.Router()
var data=require('../data/data.json')
routes.get('/',function(req,res){
    	res.render('feedback',{
     	pageTitle:'feedback',
     	pageID:'feedback'
     })
})

module.exports=routes;