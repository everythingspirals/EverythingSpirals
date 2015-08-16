var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = new Schema({
  title: String,
  body: String,
  //tags
  dateCreated: Date,
  isPublic: Boolean
});

module.exports = mongoose.model('Tag', postsSchema);
