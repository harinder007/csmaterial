const mongoose = require('mongoose')

const AdminSchema = mongoose.Schema({
    username:{
      type: String,
        required: true,
    },
    password:{
      type: String,
        required: true,
    }
  });
  
  module.exports = mongoose.model('admin', AdminSchema);
  