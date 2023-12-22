let express = require('express');
let path = require('path');
let mongo = require('mongodb');
let bodyParser  = require('body-parser');
let crypto = require('crypto');

let app = express();
let new_db = "mongodb://localhost:27017/database_name";

app.get('/', (req,res)=>{
res.set({
    "Access-Control-allow-Origin" : "*"
});
return res.redirect('/public/index.html');
}).listen(3000);

console.log("Server listening at : 3000");
app.use('/public', express.static(_dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

const getHash =(pass, phone) =>{
    let hmac = crypto.createHmac('sha512', phone);
    // passing the data to be hashed
    data = hmac.update(pass);
    // creating the hmac in the required format
    gen_hmac = data.digest('hex');

    // printing the output on the console
    console.log("hmac : "+ gen_hmac);
    return gen_hmac;
}

app.post('/signup', function(req, res){
    let name = req.body.name;
    let email = req.body.email;
    let pass = req.body.password;
    let phone = req.body.phone;
    let password = getHash(pass, phone);


    const data = {
        "name":  name,
        "email": email,
        "password": password,
        "phone": phone
    }

mongo.connect (new_db, function(error, db){
    if(error) throw error;
    console.log("connected to the database successfully");

    // creating a collection in mongoDB using node.js
    db.collection("details").insertOne(data, (err, collection)=>{
        if(err) throw err;
        console.log("Record inserted successfully");
        console.log(collection);
    })
});

console.log("DATA is " + JSON.stringify(data));
res.set({
    "Access-COntrol-Allow-Origin": "*"
})
return res.redirect('/public/success.html')

})