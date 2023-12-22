let crypto = require('crypto');
let hmac = crypto.createHmac('whirlpool', 'yoursecretkeyhere');
data = hmac.update('nodejsera');
gen_hmac = data.digest('hex');
console.log("hmac : " + gen_hmac);