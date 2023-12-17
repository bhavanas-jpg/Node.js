// Validating email using regualr expression:
/**
 * It will not check whether that email address is a valid one or whether that domain or sub domain exists or not. It will only check whether the email provided met all the constraints required for a valid email or not.
 */

var str = 'bhavanas904@gmail.com'
var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

var res = str.match(pattern);
if(res) console.log("Valid email address");
else console.log("Please enter a valid email address");
