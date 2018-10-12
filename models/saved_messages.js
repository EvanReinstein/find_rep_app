const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SavedMessagesSchema = new Schema({
  content: String,
  name: String,
  email: String
});

const SavedMessages = mongoose.model('SavedMessages', SavedMessagesSchema);

module.exports = SavedMessages;
