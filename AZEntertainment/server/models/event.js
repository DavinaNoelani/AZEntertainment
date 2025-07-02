
const mongoose = require('mongoose');
require('dotenv').config()


const EventSchema = new mongoose.Schema({

    category: {
        type: String,
        required: true
    },
    audience: {
        type: String,
    },
    eventName: {
        type: String,
        required: true
    },
    eventStartDate: {
        type: Date,
        required: true
    },
    eventEndDate: {
        type: Date,
        required: true
    },
    time: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    venue: {
        type: String,
        required: true
    },
    venueDescription: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    website: {
        type: String,
    },
    address: {
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zipcode: {
            type: String,
            required: true
        }
    },
    comment: [{
        message: String,
        date: {
            type: Date,
            default: Date.now
        }
    }],
    eventImage: {
        type: [String]
    },
    likes: {
        type: Number,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('event', EventSchema);


