function Persistence(schema,encoder) {
  this.schema = schema;
  this.encoder = encoder;
};

Persistence.prototype.addPerson = function(correo,password) {
  if (correo && password) {
    //generar con el id del usuario y un timestamp del momento del registro
    
    encoder.on('end', function(png_data){
	    // png_data is an instance of Buffer
	    // do something
	});
	encoder.encode('some value');
  }
};

Persistence.prototype.getPushCode = function(id) {
	// query normal que devuelve el push_code
	return schema.findOne({'user_id': id},'push_code', function (err, person) {
	  if (err) return handleError(err);
	  console.log('%s code to send push message.', person.push_code);
	  return person.push_code;
	});
};

Persistence.prototype.getLogin = function (correo) {
	return schema.findOne({'email': 'el_email'},'email password user_id', function (err, person) {
	  if (err) return handleError(err);
	  console.log('%s email and %s password and %s user_id.', person.email, person.password, person.user_id);
	  return person;
	});	
};