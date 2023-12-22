/**
 * Secure Hash Algorithm 384 comes under SHA2 and it is a cryptographic hash function
 * which is used to generate hash values.
 * It produces a 384-bit hash value which is known as message digest.
 */

let crypto = require('crypto');
let hash = crypto.createHash('sha384');
data = hash.update('nodejsera', 'utf-8');
gen_hash = data.digest('hex');
console.log("hash : " + gen_hash);
