const express = require('express')
const Ad = require('../models/Ad.model')
const router = express.Router();
/**
 * All routes are prefixed with /api/ad
 */
router.get('/', async(req, res) => {
    try {
        const ads = await Ad.find()
        res.status(200).json(ads)
    } catch(error) {
        next(error)
    }
}); 

module.exports = router; 