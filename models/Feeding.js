const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedingSchema = new Schema({
  time: {
    type: String,
    required: true
  },
  foodType: [{ 
    type: String, 
    required: true
  }],    
  city: {
    type: String,
    required: true
  },
  neighbourhood: {
    type: String,
    required: true
  },
  numDucks: { 
    type: Number, 
    required: true
  },
  foodAmount: {
    type: Number, 
    required: true
  }
}, {
  timestamps: true
});

module.exports = Feeding = mongoose.model('Feeding', FeedingSchema);