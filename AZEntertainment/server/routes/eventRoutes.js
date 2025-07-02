const express = require('express');
const router = express.Router();

// import event model
const Event = require('../models/event');

// @route GET api/event/test
// @description tests event route
// @access Public
router.get('/test', (req, res) => res.send('Event route testing!'));

// @route GET api/
// @description Get all events
// @access Public
router.get('/', (req, res) => {
    Event.find()
        .then((events) => res.json(events))
        .catch((err) => res.status(404).json({ error: 'No event found' }))
});

// @route GET api/:eventName
// @description Get single user by Event Name
// @access Public
router.get('/eventName-search/:eventName', (req, res) => {
    Event.find({ eventName: req.params.eventName })
        .then((events) => res.json(events))
        .catch((error) => res.status(404).json({ error: 'No event found' }));
});

// Removed duplicate '/all' route to avoid redundancy and potential conflicts.

// @route GET api/:date
// @description Get single user by date
// @access Public
router.get('/date-search/:date', (req, res) => {
    Event.find({ date: req.params.date })
        .then((events) => res.json(events))
        .catch((error) => res.status(404).json({ error: 'No events found' }));
});

// @route GET api/:date
// @description Get single user by date
// @access Public

router.get('/city-search/:city', (req, res) => {
    Event.find({ city: req.params.city })
        .then((events) => res.json(events))
        .catch((err) => res.status(404).json({ noeventsfound: 'No events found' }));
});



// @route POST api/
// @description add/save event
// @access Public
// http://localhost:5000/api/event/new-event/
router.post('/new-event', (req, res) => {
    Event.create(req.body)
        .then((events) => res.json({ msg: 'Event added successfully' }))
        .catch((error) =>
            res.status(400).json({ error: 'Unable to add this event' })
        );
});

// @route PUT api/:add comment by id
// @description Update comment
// @access Public
// http://localhost:5000/api/event/add-comment/
router.put('/add-comment/:id', (req, res) => {
    Event.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((event) => {
            if (!event) {
                return res.status(404).json({ error: 'Event not found' });
            }
            res.status(200).json(event);
        })
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route  api/:id
// @description Update comment
router.put('/add-share/:id', (req, res) => {
    Event.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((event) => {
            if (!event) {
                return res.status(404).json({ error: 'Event not found' });
            }
            res.status(200).json(event);
        })
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});


router.delete('/delete-event/:id', (req, res) => {
    Event.findByIdAndRemove(req.params.id)
        .then(event => res.json({ msg: 'Event entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such event' }));
});

module.exports = router;