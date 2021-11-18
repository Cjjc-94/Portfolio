const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UsersSchema = new Schema({
  firstName: {type: String, required:true},
  lastName: {type: String, required:true},
  email: {type: String, required:true},
  pw: {type: String, required:true},
  image: {type: String},
  type: {type: String, required:true},
  city: {type: String, required:true},
  profession: {type: String},
  website: {type: String},
  description: {type: String},
  phone: {type: String},
  experience: {type: String},
  education: {type: String},
  appointmentIDs: [Number],
  creationDate: {type: String},
  lastlogin: {type: String},
})



module.exports =mongoose.model('User', UsersSchema)

//drop all info in user DB: mongo db_users --eval "db.dropDatabase()"
// (TODO: set up autopopulate)
