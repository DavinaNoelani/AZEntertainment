import express from 'express';
import Yolo from '../models/yolo.js';
const yoloRoutes = express.Router();

// import yolo model


// @route GET api/yolo/test
// @description tests yolo route
// @access Public
yoloRoutes.get('/test', (_, res) => res.send('Yolo route testing!'));


// @route GET api/
// @description Get all yolo
// @access Public
yoloRoutes.get('/', (_, res) => {
    Yolo.find()
        .then((yolo) => res.json(yolo))
        .catch(() => res.status(404).json({ noyolofound: 'No yolo Found' }))
});


// @route GET api/:activityName
// @description Get single user by activity Name
// @access Public
yoloRoutes.get('/activityName-search/:activityName', (req, res) => {
    Yolo.find({ activityName: req.params.activityName })
        .then((yolo) => res.json(yolo))
        .catch(() => res.status(404).json({ noyolofound: 'No Yolo found' }));
});



// @route GET api/:operationDays
// @description Get single yolo by operationDays
// @access Public
yoloRoutes.get('/date-search/:operationDays', (req, res) => {
    Yolo.find({ operationDays: req.params.operationDays })
        .then((yolos) => res.json(yolos))
        .catch(() => res.status(404).json({ noyolofound: 'No yolo found' }));
});

// @route GET api/:city
// @description Get single user by city
// @access Public
// yoloRoutes.get('/city-search/:city', (req, res) => {

yoloRoutes.get('/city-search/:city', (req, res) => {
    Yolo.find({ city: req.params.city })
        .then((yolos) => res.json(yolos))
        .catch(() => res.status(404).json({ noyolofound: 'No yolo found' }));
});


// @route POST api/
// @description add/save yolo
// @access Public
// http://localhost:5000/api/yolo/new-yolo/
yoloRoutes.post('/new-yolo', (req, res) => {
    Yolo.create(req.body)
        .then(() => res.json({ msg: 'Yolo added successfully' }))
        .catch(() =>
            res.status(400).json({ error: 'Unable to add this yolo' })
        );
});

// @route POST api/:add comment by id
// @description Add comment to yolo
// @route PUT api/:add comment by id
// @description Update comment
// @access Public
// http://localhost:5000/api/yolo/add-comment/

yoloRoutes.put('/add-comment/:id', async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        const updatedYolo = await Yolo.findByIdAndUpdate(
            req.params.id,
            { $push: { comment: { message } } }, // 👈 Push a comment object
            { new: true } // 👈 Return updated doc
        );

        if (!updatedYolo) {
            return res.status(404).json({ error: 'Activity not found' });
        }

        res.status(200).json(updatedYolo);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error while adding comment' });
    }
});

// @route PATCH api/:id
// @description Update comment
// @access Public
// http://localhost:5000/api/yolo/add-comment/
// yoloRoutes.patch('/add-comment/:id', (req, res) => {

yoloRoutes.patch('/add-comment/:id', (req, res) => {

    Yolo.findByIdAndUpdate(req.params.id, req.body)
        .then((yolo) => {
            res.status(201).send(yolo)
        })
        .catch(() =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});
// @route PUT api/add-like/:id
// @description add like to yolo by id  
// @access Public   
yoloRoutes.put('/like/:id', async (req, res) => {
    try {
        const updatedYolo = await Yolo.findByIdAndUpdate(
            req.params.id,
            { $inc: { likes: 1 } },
            { new: true }
        );

        if (!updatedYolo) {
            return res.status(404).json({ error: 'Activity not found' });
        }

        res.status(200).json(updatedYolo);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update like count' });
    }
});



yoloRoutes.delete('/delete-event/:id', (req, res) => {
    Yolo.findByIdAndRemove(req.params.id)
        .then(() => res.json({ mgs: 'Event entry deleted successfully' }))
        .catch(() => res.status(404).json({ error: 'No such yolo' }));
});


export default yoloRoutes;