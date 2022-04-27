const router = require('express').Router();

//all controller functions
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../Controllers/userController')

// /api/users
//GET All Users
//Post New User
router.route('/').get(getUsers).post(createUser);

//Get Single User
//Put Update user _id
//DELETE Remove user _id
//BONUS Remove a user's associated thoughts on delete
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;