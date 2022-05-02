///api/thoughts/:thoughtId/reactions
const {Thought} = require('../Models')

module.exports = {
    // POST to create a reaction stored in a single thought's reactions array field
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {addToSet: {reactions: req.body}},
            {new: true}

        ).then((reaction)=>{
            !reaction
                ? res.status(400).json({message: 'Creation of a reaction failed. Check your params or body'})
                : res.status(200).json(reaction)
        })
    },
    // DELETE to pull and remove a reaction by the reaction's reactionId value
    deleteReaction(req, res){
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},


        ).then((reaction)=>{

        })
    }
}