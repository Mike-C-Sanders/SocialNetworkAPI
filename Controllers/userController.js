const {User, Thought} = require('../Models');

module.exports = {
    //GET All Users
    getUsers(req, res){
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    //Get Single User
    getSingleUser(req, res){
        User.findOne({_id: req.params.courseId})
        .select('-__v')
        .then((user)=>{
            !user 
                ? res.status(404).json({message: 'No course with that ID'})
                : res.json(user)
        })
    },
    //Post New User
    createUser(req, res){
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        })
    },
    //Put Update user _id
    updateUser(req, res){
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            {runValidators: true, new: true}
        ).then((user) =>{
            !user
                ? res.status(404).json({message: 'No user with this id!'})
                : res.json(user)
        }).catch((err) => res.status(500).json(err));
    },
    //DELETE Remove user _id
    //BONUS Remove a user's associated thoughts on delete
    deleteUser(req, res){
        //find the user to delete and delete the user
        User.findOneAndDelete(
            {_id: req.params.userId}
            //then take the user id and delete all associated thoughts (this will also delete any associated reactions because reactions are nested under the thoughts Schema);
        ).then((user) =>{
            !user 
                ? res.status(404).json({message: 'No user with that ID'})
                : Thought.deleteMany({_id: {$in: user.thoughts}})
        })
    }
}