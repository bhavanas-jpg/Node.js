/**
 * This hashing algorithm takes input of any length less than (2 power 256 bits)
 *  and outputs a 512-bit hash
 */

let crypto = require('crypto');
let hash = crypto.createHash('whirlpool');
data = hash.update('nodejsera', 'utf-8');
gen_hash = data.digest('hex');
console.log("hash :" + gen_hash);