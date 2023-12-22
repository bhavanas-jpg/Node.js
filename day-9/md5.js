/**
 * MD5 stands for message digest 5 is a widely used hash function which produce 128-bit hashes.
 * 
 */

let crypto = require('crypto');
let hash = crypto.createHash('md5');
data = hash.update('nodejsera', 'utf-8');
gen_hash = data.digest('hex');
console.log("hash: " + gen_hash);