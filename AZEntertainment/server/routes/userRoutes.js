const express = require('express');
const router = express.Router();

// import user model
const User = require('../models/user')

// @route GET api/user/test
// @description tests user route
// @access Public
router.get('/test', (_req, res)=> res.send ('User route testing!'));

// @route POST api/
// @description Verify Users
// @access Public
router.post('/verify-user', (req, res) => {
    const {userName, password} = req.body;
    User.findOne({userName: userName})
        .then((user) => {
            if(user.password === password) {
                res.status(200).send(user)
            }
            else{
                res.status(401).json({"error": "password incorrect"})
            }
        })
        .catch((err) =>
            res.status(404).json({ "error": 'No user found' })
        );
});
// @route GET api/
// @description Get all users
// @access Public
router.get('/', (req,res)=>{
    User.find()
    .then((users)=>res.json(users))
    .catch((err)=> res.status(404).json({ nouserfound:'No User Found'}))
});

// @route GET api/:id
// @description Get single user by User Name
// @access Public
router.get('/one-user/:id', (req, res) => {
    User.findById(req.params.id)
        .then((user) => res.json(user))
        .catch((err) => res.status(404).json({ nouserfound: 'No User found' }));
});

// @route GET api/all data 
// @description Get all data 
// @access Public

router.get('/all', (req, res) => {
    User.find()
        .then((users) => {
            console.log("info found");
            res.json(users);
        })
        .catch((err) => res.status(404).json({ nouserfound: 'No user found' }));
});

// @route GET api/:firstName
// @description Get single user by firstName 
// @access Public
router.get('/firstName-search/:firstName', (req, res) => {
    User.find({ firstName: req.params.firstName })
        .then((users) => res.json(users))
        .catch((err) => res.status(404).json({ nouserfound: 'No user found' }));
});

// @route POST api/
// @description add/save user
// @access Public
// http://localhost:5000/api/user/new-user/
router.post('/new-user', (req, res) => {
    User.create(req.body)
        .then((user) => res.json({ msg: 'User added successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to add this user' })
        );
});

// @route PUT api/:update record
// @description Update record
// @access Public
// http://localhost:5000/api/user/update-record/
router.put('/update-record/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json(user);
        })
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

router.delete('/delete-user/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(user => res.json({ msg: 'User entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such user' }));
});
        

module.exports = router;