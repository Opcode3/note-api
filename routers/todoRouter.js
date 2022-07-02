const express = require('express');
const todoController = require('../controllers/todoController');


const router = express.Router();


router.get('/', todoController.getAllTodo); //get all registered todos
router.get('/:id', todoController.getTodoById); //get a registered todo by id
router.get('/page/:page', todoController.getTodosByPage); //get todos by page number
router.post('/', todoController.createTodo); // create a new todo
router.put('/:id', todoController.updateTodo); // update a todo by id
router.delete('/:id', todoController.deleteTodo); // create a new todo




module.exports = router;