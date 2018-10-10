const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SavedMessagesSchema = new Schema({
  content: String,
  representative: String,
  issue: {
    type: Schema.Types.ObjectId,
    ref: "Issue"
  }
});

const SavedMessages = mongoose.model('SavedMessages', SavedMessagesSchema);

module.exports = SavedMessages;
