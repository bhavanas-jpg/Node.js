/** 
 * SHA256 HMAC: It is same as hashing the input with SHA256 hashing algorithm as explained above.
 * The only difference is it involves hashin with the help of  a secret key 
 */

let crypto = require('crypto');
let hash = crypto.createHmac('sha256', 'yoursecretkeyhere');
data = hash.update('nodejsera', 'utf-8');
 gen_hmac = data.digest('hex');
console.log("hmac : " + gen_hmac);