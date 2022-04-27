const req = require('express/lib/request');
const {Thought, User} = require('../Models');

module.exports ={

    //GET All Thoughts
    getThoughts(req, res){
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    //Get Single THought
    getSingleThought(req,res){
        Thought.findOne({_id: req.params.courseId})
        .select('-__v')
        .then((thought) =>{
            !thought
                ? res.status(404).json({message: 'No thought with that ID'})
                : res.json(thought)
        })
    },
    //Post Create a new Thought - push to user thought array
    
    //Put update a Thought by _id
    
    //Delete delete
}