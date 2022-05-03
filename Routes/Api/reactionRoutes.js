// /api/thoughts/:thoughtsid/reactions
const router = require('express').Router();

const {
    createReaction,
    deleteReaction,
} = require('../../Controllers/reactionController');

//Post create a reaction stored in a single thought array
router.route('/reactions')
.post(createReaction)

//Delete Remove a Reaction
router.route('/reactions/:reactionId')
    .delete(deleteReaction)


module.exports = router;