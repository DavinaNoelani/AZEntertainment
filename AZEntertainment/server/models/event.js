
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


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
        type: String
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
    likes: {type: Number, default: 0},
    shareCount: { type: Number, default: 0 },
},
    {
        timestamps: true
    });

const Event = mongoose.model('Event', EventSchema);
export default Event;



