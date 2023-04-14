const mongoose = require('mongoose')

const ProgramSchema = mongoose.Schema({
    className:{
      type: String,
        required: true,
    },
    sem:{
      type: Number,
        required: true,
    },
    topic: {
        type:String,
        required: true,
    },
    viewLink: {
      type: String,
      required: true,
    },
    downloadLink: {
      type: String,
      required: true,
    }
  });
  
  module.exports = mongoose.model('program', ProgramSchema);
  