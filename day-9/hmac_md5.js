
let crypto = require('crypto');
let hmac = crypto.createHmac('md5', 'yoursecretkeyhere');
data = hmac.update('nodejsera');
gen_hmac = data.digest('hex');
console.log("hmac : " + gen_hmac);