const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SavedMessageSchema = new Schema({
  content: String,
  representative: String,
  issue: {
    type: Schema.Types.ObjectId,
    ref: "Issue"
  }
});

const SavedMessage = mongoose.model('SavedMessage', SavedMessageSchema);

modules.exports = SavedMessage;
