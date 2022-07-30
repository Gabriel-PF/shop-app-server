const express = require('express');
const router = express.Router();
const  User  = require("../models/User.model");
const Travel  = require('../models/Travel.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const isAuthenticated = require("../middleware/isAuthenticated");



