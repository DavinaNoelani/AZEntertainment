const express = require('express');
const router = express.Router();

// import yolo model
const Yolo = require('../models/yolo')

// @route GET api/yolo/test
// @description tests yolo route
// @access Public
// router.get('/test', (req, res)=> res.send ('Yolo route testing!'));

router.get('/test', (_, res)=> res.send ('Yolo route testing!'));

// @route GET api/
// @description Get all yolo
// @access Public

router.get('/', (_, res)=>{
    Yolo.find()
    .then((yolo)=>res.json(yolo))
    .catch(()=> res.status(404).json({ noyolofound:'No yolo Found'}))
});


// @route GET api/:activityName
// @description Get single user by activity Name
// @access Public

router.get('/activityName-search/:activityName', (req, res) => {
    Yolo.find({ activityName: req.params.activityName })
        .then((yolo) => res.json(yolo))
        .catch(() => res.status(404).json({ noyolofound: 'No Yolo found' }));
});

// @route GET api/:operationDays
// @description Get single yolo by operationDays
// @access Public
// router.get('/date-search/:operationDays', (req, res) => {

router.get('/date-search/:operationDays', (req, res) => {
    Yolo.find({ operationDays: req.params.operationDays })
        .then((yolos) => res.json(yolos))
        .catch(() => res.status(404).json({ noyolofound: 'No yolo found' }));
});

// @route GET api/:city
// @description Get single user by city
// @access Public
// router.get('/city-search/:city', (req, res) => {

router.get('/city-search/:city', (req, res) => {
    Yolo.find({ city: req.params.city })
        .then((yolos) => res.json(yolos))
        .catch(() => res.status(404).json({ noyolofound: 'No yolo found' }));
});


// @route POST api/
// @description add/save yolo
// @access Public
// http://localhost:5000/api/yolo/new-yolo/
// router.post('/new-yolo', (req, res) => {

router.post('/new-yolo', (req, res) => {
    Yolo.create(req.body)
        .then(() => res.json({ msg: 'Yolo added successfully' }))
        .catch(() =>
            res.status(400).json({ error: 'Unable to add this yolo' })
        );
});
// @route PUT api/:add comment by id
// @description Update comment
// @access Public
// http://localhost:5000/api/yolo/add-comment/
// router.put('/add-comment/:id', (req, res) => {

router.put('/add-comment/:id', (req, res) => {
  
    Yolo.findByIdAndUpdate(req.params.id, req.body)
        .then((yolo) => {
            res.status(201).send(yolo)
        })
        .catch(() =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route PATCH api/:id
// @description Update comment
// @access Public
// http://localhost:5000/api/yolo/add-comment/
// router.patch('/add-comment/:id', (req, res) => {

router.patch('/add-comment/:id', (req, res) => {
  
    Yolo.findByIdAndUpdate(req.params.id, req.body)
        .then((yolo) => {
            res.status(201).send(yolo)
        })
        .catch(() =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// router.delete('/delete-event/:id', (req, res) => {


router.delete('/delete-event/:id', (req, res) => {
    Yolo.findByIdAndRemove(req.params.id)
        .then(() => res.json({ mgs: 'Event entry deleted successfully' }))
        .catch(() => res.status(404).json({ error: 'No such yolo' }));
});
module.exports = router;