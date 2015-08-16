var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postsSchema = new Schema({
  title: String,
  body: String,
  //tags
  dateCreated: Date,
  isPublic: Boolean
});

module.exports = mongoose.model('Post', postsSchema);
