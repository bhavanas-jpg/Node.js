/** we are hashing the contents of a file using node.js streams, node.js filesystem and SHA256
 *  Cryprographic hashing algorithm
 */

// loading the required modules in node.js
let crypto = require('crypto');
let fs = require('fs');

// algorithm to be used for HASH & creating hash object
let algorithm = 'sha256';
let hash = crypto.createHash(algorithm);

// reading the content of the file
let filename = "data.txt";
let file_data = fs.ReadStream(filename);

// passing the data to be hashed
file_data.on('data', function(data){
    hash.update(data);
})

// creating the hash in the required format and writing it in file
file_data.on('end', function(){
    let gen_hash = hash.digest('hex');
    console.log('hash generated using' + algorithm + '\n Hashed output is :' + gen_hash + '\nFilename is : ' + filename);
    fs.writeFileSync(filename, gen_hash)
})
