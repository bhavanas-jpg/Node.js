
let crypto = require('crypto');
let fs = require('fs');

let algorithm = 'md5';
let secret = 'Rj2895647';
let hmac = crypto.createHmac(algorithm, secret);

// reading the content of the file
let filename = "data.txt";
let file_data = fs.ReadStream(filename);

// passing the data to be hashed
file_data.on('data', function(data){
    hmac.update(data);
})

// Creating the hmac in the required format and writing it in file

file_data.on('end', function(){
    let gen_hmac = hmac.digest('hex');
    console.log('Hmac generated using' + algorithm + '\nHashed output is : ' + gen_hmac + 
    '\nFile name is : ' + __filename
    );
    fs.writeFileSync(filename, gen_hmac)
})