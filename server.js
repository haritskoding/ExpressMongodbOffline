const express = require('express');
const bodyParser = require('body-parser');
const todos = require("./routes/todoRoutes");
const mongoose = require("mongoose");

let mongourl = "mongodb://localhost:27017/arisapi";


mongoose.connect(mongourl, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"))
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/freshicies", todos);


const port = 3000;
app.listen(port, () => console.log(`Localhost sudah berjalan di port ${port}`))
