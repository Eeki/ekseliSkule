const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: String,
  wistiaId: String,
  description: String
});

const ModelClass = mongoose.model('video', videoSchema);

module.exports = ModelClass;