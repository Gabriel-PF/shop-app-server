const express = require('express');
const router = express.Router();
const  User  = require("../models/User.model");
const Travel  = require('../models/Travel.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const isAuthenticated = require("../middleware/isAuthenticated");


/**
 * All routes are prefixed with /api/ad
 */
router.get('/', async(req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch(error) {
        next(error)
    }
}); 





module.exports = router; 