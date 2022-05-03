const router = require('express').Router();

//all controller functions
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
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
    .delete(deleteUser);

 //POST to add a new friend to a user's friend list
 // DELETE to remove a friend from a user's friend list
router.route('/:userId/friends/:friendsId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;