const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get('/technology', (req, res)=> res.send("Notícias de Tecnologia"));
app.get('/games', (req, res)=> res.send("Notícias de Games"));
app.get('*', (req, res)=> res.send("Portal de notícias"));

app.listen(port, ()=> console.log(`Server started at port ${port}`));