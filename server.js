var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/Views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/license",function(req,res){
  res.sendFile(path + "license.html");
});

router.get("/certificate",function(req,res){
  res.sendFile(path + "certificate.html");
});

router.get("/katalog",function(req,res){
  res.sendFile(path + "katalog.html");
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
app.use("/assets", express.static(__dirname + '/assets'));
app.use("/images", express.static(__dirname + '/images'));

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(9000,function(){
  console.log("Live at Port 3000");
});
