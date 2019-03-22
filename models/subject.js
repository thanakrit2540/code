const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Subjects = new Schema({
  ID: {
     type: String
  },
  name: {
    type: String
 },
 ID_teacher: {
  type: String
},
amount: {
    type: String
 },
 group: {
    type: String
 }
},{
    collection: 'subjects'
});

module.exports = mongoose.model('Subjects', Subjects);