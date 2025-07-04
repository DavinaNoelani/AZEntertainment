import express from 'express';
import Event from '../models/event.js';
const eventRoutes = express.Router();


// import event model
// @route GET api/event/test
// @description tests event route
// @access Public

eventRoutes.get('/test', (_, res) => res.send('Event route testing!'));

// @route GET api/
// @description Get all events
// @access Public
eventRoutes.get('/', (_, res) => {
    Event.find()
        .then((events) => res.json(events))
        .catch(() => res.status(404).json({ error: 'No event found' }))
});


// @description Get single user by Event Name
// @route GET api/:eventName
// @access Public
eventRoutes.get('/eventName-search/:eventName', (req, res) => {
    Event.find({ eventName: req.params.eventName })
        .then((events) => res.json(events))
        .catch(() => res.status(404).json({ error: 'No event found' }));
});

// @route GET api/:date
// @description Get single user by date
// @access Public
eventRoutes.get('/date-search/:date', (req, res) => {
    Event.find({ date: req.params.date })
        .then((events) => res.json(events))
        .catch(() => res.status(404).json({ error: 'No events found' }));
});

// @route GET api/:city
// @description Get single user by city
// @access Public
eventRoutes.get('/search', async (req, res) => {
    const query = {};

    if (req.query.city) query.city = req.query.city;
    if (req.query.date) query.date = req.query.date;
    if (req.query.eventName) query.eventName = req.query.eventName;

    try {
        const events = await Event.find(query);
        res.json(events);
    } catch {
        res.status(400).json({ error: 'Search failed' });
    }
});



// @route POST api/
// @description add/save event
// @access Public
// http://localhost:5000/api/event/new-event/

eventRoutes.post('http://localhost:5000/api/event/new-event/', (req, res) => {
    Event.create(req.body)
        .then(() => res.json({ msg: 'Event added successfully' }))
        .catch(() =>
            res.status(400).json({ error: 'Unable to add this event' })
        );
});

// @route PUT api/add-comment/:id
// @description add comment to event by id
// http://localhost:5000/api/event/add-comment/

eventRoutes.put('/add-comment/:id', async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id,
            { $push: { comment: { message } } },
            { new: true }
        );

        if (!updatedEvent) {
            return res.status(404).json({ error: 'Event not found' });
        }

        res.status(200).json(updatedEvent);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Unable to update the database' });
    }
});


// @route PUT api/add-share/:id
// @description add share to event by id    
// @access Public
// http://localhost:5000/api/event/add-share/
eventRoutes.put('/add-share/:id', (req, res) => {
    Event.findByIdAndUpdate(
        req.params.id,
        { $inc: { shareCount: 1 } },
        { new: true }
    )
        .then((updatedEvent) => {
            if (!updatedEvent) {
                return res.status(404).json({ error: 'Event not found' });
            }
            res.status(200).json(updatedEvent);
        })
        .catch(() => res.status(500).json({ error: 'Unable to update share count' }));
});

// @route DELETE api/delete-event/:id
// @description Delete event by id
// @access Public   

eventRoutes.delete('/delete-event/:id', (req, res) => {
    Event.findByIdAndRemove(req.params.id)
        .then(() => res.json({ msg: 'Event entry deleted successfully' }))
        .catch(() => res.status(404).json({ error: 'No such event' }));
});

// @route PUT api/add-like/:id  
// @description add like to event by id
// @access Public   
eventRoutes.put('/like/:id', async (req, res) => {
  try {
    const likedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );

    if (!likedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.status(200).json(likedEvent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error updating like count' });
  }
});


// @route PATCH api/:id
// @description Update event by id
// @access Public

export default eventRoutes;