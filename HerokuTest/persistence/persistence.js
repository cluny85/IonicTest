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
exports.getLogin = function(mail) {
    var result=null;

    BBDD.findOne(
    	{email: mail},
    	'email password user_id', 
    	function (err, person) {
		  if (err) return handleError(err);
		  console.log('%s email and %s password and %s user_id.', person.email, person.password, person.user_id);
		  result=person;		  
		}
	);
	return result;
};

exports.addUser = function(user) {
    var result=null;

    var pushSchema = new BBDD({
	  user_id:  user.user_id,
	  push_code: user.push_code,
	  email: user.email,
	  password: user.password,
	  bidi_code:  user.bidi_code
	});

    pushSchema.save(function(err) {
        if(err){
        	result={
        		code: 'KO',
        		message: err.message
        	};
        }
        else result = {code: 'OK',message: "New user inserted"};
    });

	return result;
};