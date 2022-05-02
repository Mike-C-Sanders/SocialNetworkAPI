///api/thoughts/:thoughtId/reactions
const {Thought} = require('../Models')

module.exports = {
    // POST to create a reaction stored in a single thought's reactions array field
    createReaction(req, res) {
        Thought.findOne(
            {_id: req.params.thoughtId},

        )
    }
    // DELETE to pull and remove a reaction by the reaction's reactionId value
}