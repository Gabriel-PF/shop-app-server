const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50,
        required: true

    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0,
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


const Ad = mongoose.model('Ad', adSchema);

module.exports =  Ad 