const express = require('express');
const port = process.env.port || 3000;

const router = require('./routers/todoRouter');

const app = express();

app.use('/api/todo', router);


app.listen(port, ()=> {
    console.log(`App server is running on localhost:${port}`)
})