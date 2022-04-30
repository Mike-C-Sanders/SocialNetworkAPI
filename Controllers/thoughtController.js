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
    createNewThought(req, res){
        Thought.create(req.body)
        .then((thought) =>{
            res.json(thought)
        }).then((thought) =>{

        })
    }
    //Put update a Thought by _id
    
    //Delete delete
}