var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// mongoose
mongoose.connect('mongodb://localhost/ecompi', function(err, res) {
    if(err) throw err;
    console.log('Connected to Database');
});
var models = require('./persistence/ecompi');//(app, mongoose);
var eCompiCtrl = require('./persistence/persistence');

// servicios
var router = express.Router();

router.get('/', function(req, res) {
   res.send("visit https://github.com/cluny85");
});

router.post('/services/login', function(req, res) {
	var response={
		result: '',
		data: {},
		msg: ''
	};
    if (req.body.login!==null &&
		req.body.login!==undefined &&
		req.body.password!==null &&
		req.body.password!==undefined ){

   		var user = {
	        login: req.body.login || '',
	        password: String(req.body.password) || ''
	    };
	    var usuario = eCompiCtrl.getLogin(user.login,user.password);
	    console.log("-- Usuario autenticado: "+usuario);
	    if (usuario) {
			response.result="OK";
			response.data=usuario;
			res.send(response);
	    }
	    else {
	    	response.result="KO";
	    	response.msg="Something fail.";
	    	res.send(response);
	    }
    }
    //res.send("visit https://github.com/cluny85");
});
router.post('/services/signup', function(req, res) {
	console.log("## Received service singup...");
	if (req.body) {
		eCompiCtrl.signup(req,res);
	} else{
		res.send("Bad way");
	}

	var us = req.body;
	if (us && us.email && us.password) {
		console.log("# Received new user: "+us.email);
		us.push_code = "123456789";
		us.bidi_code = "";
		var result = eCompiCtrl.addUser(us);

		console.log("-- Usuario registrado: "+result);
	}
   //res.send("visit https://github.com/cluny85");
});
router.post('/services/sendpush', function(req, res) {
   
   //res.send("visit https://github.com/cluny85");
});
/* servicios prueba */

app.use(router);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});