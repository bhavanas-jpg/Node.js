/**
 * 
 * Example of Asymmetric encryption
    Encrypting using public key and decrypting using private key
 */

    // Including the required modules

    let crypto = require('crypto');
    let fs = require('fs');

    // Reading the public key
    pubK = privK = fs.readFileSync('pub.key').toString();

    // Passing the text to be encrypted using private key
    let buf = Buffer.from('This is secret code', 'utf-8');

    // Encrypting the text
    secretData = crypto.publicEncrypt(pubK, buf);
    // Printing the encrypted text
    console.log(secretData.toString('utf-8'));
    //reading the private key
    privK = {
        key: fs.readFileSync('priv.key').toString(),
        passphrase : 'nodejsera'
    }

    //decrypting the text using public key

    origData = crypto.privateDecrypt(privK, secretData);

    //Printing the original content
    console.log(origData.toString());