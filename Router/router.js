const router = require('express').Router();

const functions=require('../backendFunctions/functions');

router.get('/api/tasks', functions.getTasks);

// Add a new task
router.post('/api/tasks', functions.addTask);

// Update a task
router.put('/api/tasks/:id', functions.updateTask );

// Delete a task
router.delete('/api/tasks/:id', functions.deleteTask);

//clear all tasks
router.get('/api/tasks/clear', functions.clearTasks);

module.exports=router