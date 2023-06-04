const mongoose = require('mongoose');

// User model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// City model

const citySchema = new mongoose.Schema({
  cityName: String,
  description: String,
  image:String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const City = mongoose.model('City', citySchema);

// Aggregate and populate users with cities
const populateUsersWithCities = async () => {
  try {
    const users = await User.aggregate([
      {
        $lookup: {
          from: 'cities',
          localField: '_id',
          foreignField: 'user',
          as: 'cities',
        },
      },
    ]);

    return users;
  } catch (err) {
    console.error('Error populating users with cities:', err);
    throw err;
  }
};

module.exports = {
  User,
  City,
  populateUsersWithCities,
};
