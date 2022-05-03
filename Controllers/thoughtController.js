const req = require('express/lib/request');
const {Thought, User} = require('../Models');

module.exports ={

    //GET All Thoughts
    getThoughts(req, res){
        //find all thoughts and then populate the reactions and remove versioning
        Thought.find().then((thoughts) =>{
            thoughts.populate({
                path: 'reactions',
                select: '-__v'
            })
            
        })
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    //Get Single THought & populate the reactions
    getSingleThought(req,res){
        Thought.findOne({_id: req.params.courseId})
        .select('-__v').then((thoughts) =>{
            thoughts.populate({
                path: 'reactions',
                select: '-__v'
            })
        })
        .then((thought) =>{
            !thought
                ? res.status(404).json({message: 'No thought with that ID'})
                : res.json(thought)
        })
    },
    //Post Create a new Thought - push to user thought array
    createNewThought(req, res){
        Thought.create(req.body)
        .then((thought) =>{
            res.json(thought)
        }).then((thought) =>{
            // find user and add new thought
        return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thought._id } },
                { new: true }
            );
        }).then((thought) =>{
            !thought
                ? res.status(404).json({message: 'No thought with that ID'})
                : res.json(thought)
        }).catch((err) => res.status(500).json(err));
    },
    //Put update a Thought by _id
    updateThought(req, res){
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$set: req.body},
            {runValidators: true, new: true}
        ).then((thought) =>{
            !thought   
                ? res.status(404).json({message: 'No thought with that ID'})
                : res.json(`Success! ${thought} has been updated`)
        }).catch((err) => res.status(500).json(err))
    },
    //Delete thoughts 
    deleteThought(req, res){
        //find one thought and delete it
        Thought.findOneAndDelete(
            {_id: req.params.thoughtId}
        ).then((thought)=>{
            !thought   
                ? res.status(404).json({message: 'No thought with that ID'})
                : res.json(`Success! This Thought Was Deleted`)
        })
    }
}