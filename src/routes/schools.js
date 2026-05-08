// src/routes/schools.js: Express routes for school endpoints

const express = require('express');
const router = express.Router();
const { addSchool, listSchools } = require('../controllers/schoolController');

router.post('/addSchool', addSchool);
router.get('/listSchools', listSchools);

module.exports = router;
