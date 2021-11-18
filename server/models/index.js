const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db_users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', function() {console.log('connection failed')});

db.once('open', function() {console.log('connection DB established')})

module.exports = db;