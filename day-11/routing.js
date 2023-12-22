/** One of the biggest advantage of using express is that it makes routing very simple. */

let express = require('express');
let app= express();

app.get('/',(req,res)=> res.send("Simple Example of routes!"));
app.get('/signup', (req,res)=> res.send("This is demo route for sign up"));
app.get('/signin', (req,res)=> res.send("This is demo route for sign in"));
app.get('/signin/dashboard', (req,res)=> res.send("This is demo route for user who signed in and now reaches their dashboard"));

app.listen(3000, ()=> console.log("Server is listening at 3000"))