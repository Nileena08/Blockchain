const EC=require('elliptic').ec;
const ec=new EC('secp256k1');

const key=ec.genKeyPair();
const PublicKey=key.getPublic('hex');
const PrivateKey=key.getPrivate('hex');

console.log();
console.log('Public Key: ',PublicKey);

console.log();
console.log('Private Key: ',PrivateKey);