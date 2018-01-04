var express=require("express")
var data=require('../data/data.json')
var router=express.Router()
router.get('/:name',function(req,res){
	var pageSpeakers=[]
	var pagePhotos=[]
	data.speakers.forEach(function(item){
		if(item.shortname==req.params.name){
			pageSpeakers.push(item)
			pagePhotos=pagePhotos.concat(item.artwork)
		}
	})
	var speakers=data.speakers[req.params.name]

    res.render('speakers',{
    	pageTitle:'speakers Info',
    	pageID:'speakers detail',
    	speakers:pageSpeakers,
    	artwork:pagePhotos
    })
})
 
router.get('/',function(req,res){
	 var pagePhotos=[]
     data.speakers.forEach(function(item){
			pagePhotos=pagePhotos.concat(item.artwork)
	})
	res.render('speakers',{
		pageTitle:'speakers',
		pageID:'speakers',
		speakers:data.speakers,
		artwork:pagePhotos
	})
})
module.exports=router;

