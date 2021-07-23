const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedingSchema = new Schema({
  time: {
    type: Date
  },
  foodType: [{ 
    type: String
  }],    
  city: {
    type: String
  },
  neighbourhood: {
    type: String
  },
  numDucks: { 
    type: Number
  },
  foodAmount: {
    type: Number
  }
}, {
  timestamps: true
});

module.exports = Feeding = mongoose.model('Feeding', FeedingSchema);