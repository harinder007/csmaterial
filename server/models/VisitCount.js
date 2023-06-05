const mongoose = require('mongoose');

const VisitCountSchema = mongoose.Schema({
  count: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('visitCount', VisitCountSchema);
