import express from 'express';
import User from '../models/user.js';
const userRoutes = express.Router();

// @route GET api/user/test
// @description tests user route
// @access Public
userRoutes.get('/test', (_req, res) => res.send('User route testing!'));

// @route POST api/
// @description Verify Users
// @access Public
userRoutes.post('/verify-user', (req, res) => {
    const { userName, password } = req.body;
    User.findOne({ userName: userName })
        .then((user) => {
            if (user.password === password) {
                res.status(200).send(user)
            }
            else {
                res.status(401).json({ "error": "password incorrect" })
            }
        })
        .catch((err) =>
            res.status(404).json({ "error": 'No user found' })
        )
})


// @description Get all users
// @access Public

userRoutes.get('/', (_req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch(() => res.status(404).json({ nouserfound: 'No User Found' }));
});

// @description Get single user by User Name
// @access Public
userRoutes.get('/one-user/:id', (req, res) => {
    User.findById(req.params.id)
        .then((user) => res.json(user))

        .catch(() => res.status(404).json({ nouserfound: 'No User found' }));
});


// @route GET api/all data 
// @description Get all data 
// @access Public

userRoutes.get('/all', (_req, res) => {
    User.find()
        .then((users) => {
            console.log("info found");
            res.json(users);
        })
        .catch(() => res.status(404).json({ nouserfound: 'No user found' }));
});

// @description Get single user by firstName 
// @access Public
userRoutes.get('/firstName-search/:firstName', (req, res) => {
    User.find({ firstName: req.params.firstName })
        .then((users) => res.json(users))
        .catch((err) => res.status(404).json({ nouserfound: 'No user found' }));
});

// @route POST api/
// @description add/save user
// @access Public
// http://localhost:5000/api/user/new-user/
userRoutes.post('/new-user', (req, res) => {
    User.create(req.body)
        .then(() => res.json({ msg: 'User added successfully' }))
        .catch(() =>
            res.status(400).json({ error: 'Unable to add this user' })
        );
})


// @route PUT api/:update record
// @description Update record
// @access Public
// http://localhost:5000/api/user/update-record/
userRoutes.put('/update-record/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json(user);
        })
})




userRoutes.delete('/delete-user/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(user => res.json({ msg: 'User entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such user' }));
})

export default userRoutes;