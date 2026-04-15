const express = require("express");
const app = express();
const home = require('./routes/home');
const path = require("path");
const mongoose = require('mongoose');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.set('views','views');

app.use(home);

const port =4001;
app.listen(port,()=>
{
    console.log(`Server is running on port http://localhost:${port}`);
})
