const {User} = require('../Models');

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
    createCourse(req, res){
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        })
    }
    //Put Update user _id

    //DELETE Remove user _id
    //BONUS Remove a user's associated thoughts on delete
}