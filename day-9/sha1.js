/**
 * secure hash algorithm 1 is a  cryptographic hash function which generates a hash
 * value which is typically rendered as a hexadecimal number of exactly 40 digits long.
 * It produces a 160-bit hash value which is known as message digest.
 */


let crypto = require('crypto');
let hash = crypto.createHash('sha1');
data = hash.update('nodejsera', 'utf-8');
gen_hash = data.digest('hex');
console.log("hash : " + gen_hash);