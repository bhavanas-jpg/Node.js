
//Here "aes-256-cbc" is the advance encryption standard we are using for encryption.
//Text is the Confidential data which we need to encrypt using 'password'(Key).

let crypto = require('crypto'),
algorithm = 'aes-256-ctr',
password = 'RJ23edrf';

const encrypt =(text) =>{
    let cipher = crypto.createCipher(algorithm, password);
    let crypted = cipher.update(text, 'utf-8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

//Here "aes-256-cbc" is the advance encyption standard we used for encrytion.
//Text is the Cipher which we need to decrypt using 'password'(Key).

const decrypt = (text) =>{
    let decipher = crypto.createDecipher(algorithm, password);
    let dec = decipher.update(text, 'hex', 'utf-8');
    dec += decipher.final('utf-8');
    return dec;
}

let text = "Nodejsera for all web development languages";
let e = encrypt(text);
console.log(e);
let d = decrypt(e);
console.log(d);