var express = require("express"),
	app = express(),
	http = require('http'),
	router = express.Router(),
	i18n = require('./i18n'),
	path = __dirname + '/Views/';

app.set('views', __dirname + '/views');

router.use(i18n);

router.get("/",function(req,res){
    res.render("index.ejs");
});

router.get("/license.html",function(req,res){
  res.render("license.ejs");
});

router.get("/certificate.html",function(req,res){
  res.render("certificate.ejs");
});
router.get("/katalog.html",function(req,res){
  res.render("katalog.ejs");
});

router.get("/katalog",function(req,res){
  res.sendFile("katalog.html");
});

app.use("/",router);


app.use("/assets", express.static(__dirname + '/assets'));
app.use("/images", express.static(__dirname + '/images'));

app.listen(9000,function(){
  console.log("Live at Port 9000");
});
