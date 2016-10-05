var express = require("express"),
	app = express(),
	http = require('http'),
	router = express.Router(),
	i18n = require('i18n'),
	path = __dirname + '/Views/';

i18n.configure({
    locales:['en', 'ru', 'ua'],
    directory: __dirname + '/locales',
	defaultLocale: 'ua',
 
    // query parameter to switch locale (ie. /home?lang=ch) - defaults to NULL 
    queryParameter: 'lang'
});

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.render(path + "index.ejs");
});

router.get("/license.html",function(req,res){
  res.render(path + "license.ejs");
});

router.get("/certificate.html",function(req,res){
  res.render(path + "certificate.ejs");
});
router.get("/katalog.html",function(req,res){
  res.render(path + "katalog.ejs");
});
/*
router.get("/images",function(req,res){
  res.sendFile(__dirname + '/images');
});


router.get("/assets",function(req,res){
	console.log("Get assets.");
  res.sendFile(__dirname + '/assets');
});
*/
app.use("/",router);
//app.use(i18n);
app.use("/assets", express.static(__dirname + '/assets'));
app.use("/images", express.static(__dirname + '/images'));

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(9000,function(){
  console.log("Live at Port 9000");
});