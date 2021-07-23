const express = require('express');
const router = express.Router();

const Feeding = require('../../models/Feeding');

router.get('/', (req, res) => {
  Feeding.find({})
    .then(feedings => res.json(feedings))
    .catch(err => res.status(404).json({ nofeedingsfound: 'No duck feedings found' }));
});

router.get('/:id', (req, res) => {
  Feeding.findOne({ _id: req.params.id })
    .then(feeding => res.json(feeding))
    .catch(err => res.status(404).json({ nofeedingfound: 'No duck feeding found with that ID' }));
});

router.post('/', (req, res) => {
  const newFeeding = new Feeding({
    time: req.body.time,
    foodType: req.body.foodType,
    city: req.body.city,
    neighbourhood: req.user.neighbourhood,
    numDucks: req.body.numDucks,
    foodAmount: req.body.foodAmount
  });

  newFeeding.save().then(feeding => res.json(feeding)); 
});

module.exports = router;