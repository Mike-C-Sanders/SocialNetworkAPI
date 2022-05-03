const router = require('express').Router();
const thoughtRoutes = require('./Api/thoughtRoutes');
const userRoutes = require('./Api/userRoutes');

//router to route all thought and reaction routes
router.use('/api', thoughtRoutes);
//roouter to route all user based routes
router.use('/api', userRoutes);

router.use((req, res) =>{
    return res.send('Wrong Route! Try Again!')
});

module.exports = router;