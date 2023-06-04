const mongoose = require('mongoose');

// User model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  city: { type: mongoose.Schema.Types.ObjectId, ref: 'City' },
});

const User = mongoose.model('User', userSchema);

// City model
const citySchema = new mongoose.Schema({
  cityName: String,
  description: String,
});

const City = mongoose.model('City', citySchema);

// Aggregation with population
User.aggregate([
  {
    $lookup: {
      from: 'cities',
      localField: 'city',
      foreignField: '_id',
      as: 'city',
    },
  },
  {
    $unwind: '$city',
  },
])
  .exec((err, results) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(results);
  });

  module.exports = {User,City}