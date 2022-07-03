
const todos = require('../models/todoModel');

exports.getAllTodo = async (req, res) => {
    try {
        const all_todos = await todos.find();
        res.json(all_todos);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.getTodoById = async (req, res) => {
    const id = req.params.id;
    try {
        const data_response = await todos.findOne({_id: id });
        res.json(data_response);
    } catch (err) {
        res.status(404).json({message: err.message});
    }
}

exports.updateTodo = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const update_data = {}

        if('title' in data) update_data.title = data.title;
        if(data.hasOwnProperty('desc')) update_data.description = data.desc;
        if(data.hasOwnProperty('iscompleted')) update_data.iscompleted = data.iscompleted;


        const res_data = await todos.findOneAndUpdate({_id: id}, update_data, { returnOriginal: false });
        res.json(res_data);



    } catch (err) {
        res.status(404).json({message: err.message})
    }

}

exports.deleteTodo = async (req, res) => {
    try{
        const id = req.params.id;
        await todos.deleteOne({_id: id});
        res.json({message: "todo has been deleted."})
    }catch(err){
        res.status(404).json({message: err.message})
    }
    res.json("deleting todo via _id");
}

exports.createTodo = async (req, res) => {

    try {
        const new_todo = new todos(
            { title: req.body.title, description: req.body.desc }
        );
        const save_response = await new_todo.save();
        res.status(201).json(save_response);

    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

exports.getTodosByPage = async (req, res) => {
    const page_no = req.params.page;
    const skip_record = (page_no - 1) * 10;  
    try {
        const all_todos = await todos.find().skip(skip_record).limit(10);
        res.json(all_todos);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}