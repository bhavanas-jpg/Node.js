/** RIPEMD (RACE Integrity Primitives Evalution Message Digest) 160
 * is an improved version of ripemd and it usually generates a 40 digit
 * hexadecimal number.
*/

let crypto = require('crypto');
let hash = crypto.createHash('ripemd160');
data = hash.update('nodejsera', 'utf-8');
gen_hash = data.digest('hex');
console.log("hash : " + gen_hash);
