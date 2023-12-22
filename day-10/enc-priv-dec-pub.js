/**
 *  Example of Asymmetric encryption
    Encrypting using private key and decrypting using public key
 */

    // including the required modules
    let crypto = require('crypto');
    let fs = require('fs');

    // Reading the private key
    privK = {
        key : fs.readFileSync('priv.key').toString(),
        passphrase: 'nodejsera'
    }

    // Passing the text to be encrypted using private key
    let buf = Buffer.from('rishabh', 'utf8');

    // encrypting the text
    secretData = crypto.privateEncrypt(privK, buf);

    //printing the encrypted text
    console.log(secretData.toString('utf8'));

    //reading the Public key
    pubK = fs.readFileSync('pub.key').toString();
    origData = crypto.publicDecrypt(pubK, secretData);
    console.log(origData.toString());

