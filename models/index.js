const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect( process.env.MONGODB_URI || "Connected on 27017..." );

const UserSchema = new Schema;

