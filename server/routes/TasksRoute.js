const express = require('express'); //import express

// 1.
const router  = express.Router(); 
// 2.
const TaskController = require('../controllers/TaskController'); 
// 3.
router.get('/', TaskController.allTasks); 
// 4. 
module.exports = router; // export to use in server.js
