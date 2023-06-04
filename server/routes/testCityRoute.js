const express = require('express');
const router = express.Router();
const cityController = require('../controllers/testCityController');
const {authenticate} = require('../middleware/testAuthMiddleware')
// Create a new city
router.post('/',authenticate, cityController.createCity);

// Read all cities
router.get('/',authenticate, cityController.getAllCities);

// Update a city
router.put('/:id',authenticate, cityController.updateCity);

// Delete a city
router.delete('/:id',authenticate, cityController.deleteCity);

module.exports = router;
