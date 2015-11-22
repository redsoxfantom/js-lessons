var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.get('/people',function(req,res){
	var people = [
		{
			first_name:"testfirst",
			last_name:"testlast",
			age:34
		}
	];

	res.json(people);
});

app.get('/downloads', function(req,res){
	res.download(path.join(__dirname,'app.js'));
});

app.get('/ppl', function(req,res){
	res.redirect('/people');
});

app.post('/subscribe', function(req,res){
	var name = req.body.name;
	var email = req.body.email;
	console.log('request made ' + name + ' ' + email );
	res.redirect('/newsletter.html');
});

app.listen(3000, function(){
	console.log("Listening on 3000");
});