const express = require('express');

const {addUser, 
       getAllUsers, 
       getUser,
       updateUser,
       deleteUser
      } = require('../controllers/userController');

const router = express.Router();

router.post('/user', addUser);
router.get('/users', getAllUsers);
router.get('/user/:uid', getUser);
router.put('/user/:uid', updateUser);
router.delete('/user/:uid', deleteUser);


module.exports = {
    routes: router
}