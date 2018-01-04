var express=require("express")
var routes=express.Router()
var data=require('../data/data.json')
routes.get('/',function(req,res){
     var pagePhotos=[]
     data.speakers.forEach(function(item){
			pagePhotos=pagePhotos.concat(item.artwork)
		
	})
     res.render('index',{
     	pageTitle:'home',
     	pageID:'home',
     	speakers:data.speakers,
     	artwork:pagePhotos
     })
})

module.exports=routes;