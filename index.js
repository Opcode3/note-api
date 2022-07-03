const router = require('./routers/todoRouter');
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.port || 3000;
const DB_URL = "mongodb://localhost/todos";

const app = express();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(DB_URL);
}


app.use(express.json());

app.use('/api/todo', router);


app.listen(port, ()=> {
    console.log(`App server is running on localhost:${port}`)
})