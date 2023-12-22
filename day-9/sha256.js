/**
 * Secure Hash algorithm 256 comes under SHA2 and it is a cryptographic hash function
 * which is used to generate hash values.
 * It produes 256-bit hash value which is known as message digest.
 */

let crypto = require('crypto');
let hash = crypto.createHash('sha256');
data = hash.update('nodejsera', 'utf-8');
gen_hash = data.digest('hex');
console.log("hash : " + gen_hash);