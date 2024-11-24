// routes/subcategory.js
const express = require('express');
const router = express.Router();

// Import controller functions
const {
    getAllSubcategory,
    createSubcategory,
} = require('../controllers/subcatagorey');

// Define routes
router.get('/subcategories', getAllSubcategory);
router.post('/subcategories', createSubcategory);

module.exports = router;
