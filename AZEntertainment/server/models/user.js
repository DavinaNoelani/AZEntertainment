import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    userImage: {
        type: [String],

    },
    events: [{
        eventPurchased: { type: String },
        dateOfEvent: { type: String },

    }],
    paymentInfo: {
        address: { type: String },
        city: { type: String },
        state: { type: String },
        zipcode: { type: String },
        creditCardType: { type: String },
        creditCard: { type: Number },
        expiration: { type: Number },
        cvv: { type: Number }
    }
},
    { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
export default User;
