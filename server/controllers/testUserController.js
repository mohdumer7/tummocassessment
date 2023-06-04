const { User, populateUsersWithCities } = require('../models/testModel');

// Create a new user
const createUser = async (req, res) => {
  try {
    const {name,email,password} = req.body;
    const user = await User.create(userData);
    res.status(201).json({ message: 'User created', user });
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err.message });
  }
};

// Read all users with populated cities
const getAllUsers = async (req, res) => {
  try {
    const users = await populateUsersWithCities();
    // const users = await User.find().populate();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err.message });
  }
};

const getuser = async (req, res) => {
  try {
    if(req.user){
      const users = await populateUsersWithCities();
      const user = users.find(u=>req.user.id) 
      console.log(user)
      if(!user){
        throw new Error("No user FOund")
      }
      res.status(200).json(user)
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user', error: err.message });
  }
};

// Update a user
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const newData = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, newData, { new: true });
    res.json({ message: 'User updated', user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: 'Error updating user', error: err.message });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    res.json({ message: 'User deleted', user: deletedUser });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user', error: err.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getuser
};

