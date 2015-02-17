var mongoose = require('mongoose');
var BBDD  = mongoose.model('eCompi');

// Return PushCode in the DB
exports.getPushCode = function(id) {
    var result=null;

    BBDD.findOne(
    	{user_id: id},
    	'push_code', 
    	function (err, person) {
		  if (err) return handleError(err);
		  console.log('%s code to send push message.', person.push_code);
		  result=person;		  
		}
	);
	return result;
};

// Return PushCode in the DB
exports.getLogin = function(mail,pass) {
    var result=null;

    BBDD.findOne(
    	{
    		email: mail,
    		password: pass
    	},
    	'push_code', 
    	function (err, person) {
		  if (err) return handleError(err);
		  console.log('%s push_code.', person.push_code);
		  result=person;		  
		}
	);
	return result;
};

exports.addUser = function(user) {
    var result=null;

    var pushSchema = new BBDD({
	  push_code: user.push_code,
	  email: user.email,
	  password: user.password,
	  bidi_code:  user.bidi_code
	});
    console.log("-- Adding new user: "+pushSchema.email);
    pushSchema.save(function(err) {
        if(err){
        	result={
        		code: 'KO',
        		message: err.message
        	};
        }
        else result = {code: 'OK',message: "New user inserted"};
    });
    console.log("-- Result new user: "+JSON.stringify(result));
	return result;
};

exports.signup = function(req,res) {
    var result=null;

    var pushSchema = new BBDD({
      push_code: user.push_code,
      email: user.email,
      password: user.password,
      bidi_code:  user.bidi_code
    });
    console.log("-- Adding new user: "+pushSchema.email);
    pushSchema.save(function(err) {
        if(err){
            result={
                code: 'KO',
                message: err.message
            };
            res.send(result);
        }
        else{
            res.contentType('application/json');
            result = {code: 'OK',message: "New user inserted"};
            res.send(JSON.stringify(result));
        }
    });
    console.log("-- Result new user: "+JSON.stringify(result));
    return result;
};