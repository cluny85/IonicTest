var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// Schema y querys
var pushSchema = new Schema({
  user_id:  { type: Number},
  push_code: { type: String},
  email: { type: String},
  password: { type: String},
  bidi_code:  { type: Number}
});

module.exports = mongoose.model('eCompi', pushSchema);