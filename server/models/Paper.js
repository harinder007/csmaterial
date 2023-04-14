const mongoose = require('mongoose')

const PaperSchema = mongoose.Schema({
    className:{
      type: String,
        required: true,
    },
    sem:{
      type: Number,
        required: true,
    },
    year: {
      type: Number,
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
  
  module.exports = mongoose.model('paper', PaperSchema);
  