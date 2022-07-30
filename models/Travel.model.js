const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const travelSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        maxLength: 50,
        required: true

    },
    description: {
        type: String,
        required: true
    },
    images: [{
        type: String,
        required: true
    
    }],
    city: {
        type: String,
        required: true
        
    },
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true })




const Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel