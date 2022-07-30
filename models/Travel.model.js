const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TravelSchema = mongoose.Schema({
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




const Product = mongoose.model('Travel', productSchema);

module.exports = { Product }