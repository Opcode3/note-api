const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true },
    iscompleted: {type: Boolean, default: false},
    timestamp: {type: String, default: Date.now}
});


module.exports = mongoose.model('todos', todosSchema);