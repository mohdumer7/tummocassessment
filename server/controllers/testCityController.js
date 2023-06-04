const { City } = require('../models/testModel');

// Create a new city
const createCity = async (req, res) => {
  try {

    const cityData = req.body
    console.log(cityData)
    const city = await City.create({ ...cityData, user: req.user.id });
    console.log('City created:', city);
    res.json(city);
    return city;
  } catch (err) {
    console.error('Error creating city:', err);
    throw err;
  }
};

// Read all cities
const getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching cities', error: err.message });
  }
};

// Update a city
const updateCity = async (req, res) => {
  try {
    const cityId = req.params.id;
    const newData = req.body;
    const updatedCity = await City.findByIdAndUpdate(cityId, newData, { new: true });
    res.json({ message: 'City updated', city: updatedCity });
  } catch (err) {
    res.status(500).json({ message: 'Error updating city', error: err.message });
  }
};

// Delete a city
const deleteCity = async (req, res) => {
  try {
    const cityId = req.params.id;
    const deletedCity = await City.findByIdAndDelete(cityId);
    res.json({ message: 'City deleted', city: deletedCity });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting city', error: err.message });
  }
};

module.exports = {
  createCity,
  getAllCities,
  updateCity,
  deleteCity,
};
