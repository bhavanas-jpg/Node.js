let express = require('express');
let fs = require('fs');

let app = express();

app.get('/',(req,res)=>res.send("Simple Example of routes!"));
app.get('/signup',(req,res)=>{
    let name = req.query.name;
    let email = req.query.email;
    let password = req.query.password;

    // For demo purpose
    console.log(name + '' + email + '' + password);

    /**store this in a DB and perform further processing */
    res.send("In signup module");
});

app.listen(3000, ()=> console.log("Server is listening at 3000"));