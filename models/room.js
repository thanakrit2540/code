const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Room = new Schema({
  ID: {
     type: String
  },
  floor: {
    type: String
 },
 building: {
  type: String
}
},{
    collection: 'room'
});

module.exports = mongoose.model('Room', Room);