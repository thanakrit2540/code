const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String
  },
  password: {
     type: String
  },
  firstName: {
    type: String
 },
 lastName: {
  type: String
},
  type: {
    type: String

  }
},{
    collection: 'person'
});

module.exports = mongoose.model('User', User);