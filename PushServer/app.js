var express = require('express')
, app = express()
, server = require('http').createServer(app)
, Persistence = require('./persistence.js');
, Encoder = require('qr').Encoder;

// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // yay!
});

// Schema y querys
var Schema = mongoose.Schema;
var pushSchema = new Schema({
  user_id:  Number,
  push_code: String,
  email: String,
  password: String,
  bidi_code:  Number
});
var eCompi = mongoose.model('eCompi', pushSchema);
// assign a function to the "statics" object of our pushSchema
/*
pushSchema.statics.findByUser = function (id, cb) {
  this.findOne({ user_id: id}, cb);
}
*/
// assign a function to the "methods" object of our pushSchema
/*
pushSchema.methods.findByUser = function (id, cb) {
  return this.model('eCompi').findOne({ user_id: id }, cb);
}
*/
// ejemplo de consulta con methods
/*
eCompi.findByUser(function (err,user_id) {
	// body...
});
*/
var encoder = new Encoder;
var bbdd = new Persistence(eCompi,encoder);

// SERVIDOR-SERVICIOS
app.get('/', function(req, res) {
  res.render('index.html');
});

app.post('/rest/login', function(req, res) {
	console.log(req.body);
	 var response={};
	if (req.body.login!==null &&
		req.body.login!==undefined &&
		req.body.password!==null &&
		req.body.password!==undefined ){

			var user = {
		        login: req.body.login || '',
		        password: String(req.body.password) || ''
		    };
		    var usuario = bbdd.getLogin(user.login);
		     console.log(usuario);
		     if (usuario.length>0){
		     	console.log(user.password);
		     	console.log(usuario.password);
		     	if (user.password==usuario.password){
		     		response.resultado="OK";
		     		response.data=usuario.user_id; // devuelve el codigo bidi
		     		response.msg="Usuario Encontrado";
		     	}else{
		     		response.resultado="KO";
		     		response.msg="Password Incorrecto";
		     	}
		     }else{
		     	response.resultado="KO";
		     	response.msg="Usuario no encontrado";
		     }

	}else{
		response.resultado="KO";
		response.msg="Indisponibilidad en el servicio";
	}
    res.send(response);
});
/*
var server = http.createServer(function (request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello, World\n");
});

server.listen(8000);
*/
console.log("Server running in port 8000...");