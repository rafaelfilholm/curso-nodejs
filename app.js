const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

/* Settings of server */
app.set("view engine", "ejs");

app.get('/', (req, res)=> res.render("home/index"));
app.get('/notices', (req, res)=> res.render("notices/notices"));
app.get('/insert-notice', (req, res)=> res.render("admin/insert-notice"));

app.listen(port, ()=> console.log(`Server started at port ${port}`));