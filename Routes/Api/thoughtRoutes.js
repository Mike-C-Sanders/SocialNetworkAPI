// /api/thoughts
const router = require('express').Router();
//reaction routes is appends the thoughts/:thoughtId route
const reactionRoutes = require('./reactionRoutes');

//all thought controller functions
const {
    getThoughts,
    getSingleThought,
    createNewThought,
    updateThought,
    deleteThought,
} = require('../../Controllers/thoughtController');

//GET All Thoughts
//Post Create a new Thought - push to user thought array
router.route('/thoughts')
    .get(getThoughts)
    .post(createNewThought);

//Get Single THought
//Put update a Thought by _id
//Delete a thought by id
router.route('/thoughts/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

router.use('/thoughts/:thoughtsId', reactionRoutes);

module.exports = router;