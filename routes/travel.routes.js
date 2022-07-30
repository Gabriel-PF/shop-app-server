const express = require('express')
const Travel = require('../models/Travel.model')
const router = express.Router();
/**
 * All routes are prefixed with /api/ad
 */
router.get('/', async(req, res) => {
    try {
        const travels = await Travel.find()
        res.status(200).json(travels)
    } catch(error) {
        next(error)
    }
}); 






module.exports = router; 