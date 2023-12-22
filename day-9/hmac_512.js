/** it involves hashing with the help of secret key */

let crypto = require("crypto");
let hmac = crypto.createHmac('sha512', 'yoursecretkeyhere');
data = hmac.update('nodejsera');
gen_hmac = data.digest('hex');
console.log("hmac : " + gen_hmac);
