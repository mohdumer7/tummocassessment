const express = require('express');
const router = express.Router();
const userController = require('../controllers/testUserController');
const { authenticate } = require('../middleware/testAuthMiddleware');

// Create a new user
// router.post('/', userController.createUser);

// Read all users
router.get('/',authenticate, userController.getuser);

router.get('/getall',userController.getAllUsers)
// // Update a user
// router.put('/:id', userController.updateUser);

// // Delete a user
// router.delete('/:id', userController.deleteUser);

module.exports = router;
