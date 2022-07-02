const todoModel = require('../models/todoModel');
exports.getAllTodo = (req, res) => {
    res.json(todoModel);
}

exports.getTodoById = (req, res) => {
    const id = req.params.id;
    const filtered_data = todoModel.filter( initial => initial._id == id);
    res.json(filtered_data);
}

exports.updateTodo = (req, res) => {
    const id = req.params.id;
    const new_data = req.body.data;
    res.json("updating todo via _id");
}

exports.deleteTodo = (req, res) => {
    res.json("deleting todo via _id");
}

exports.createTodo = (req, res) => {
    res.json("adding a new todo");
}

exports.getTodosByPage = (req, res) => {
    res.json("getting todos by pagination...");
}