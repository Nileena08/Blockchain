const {Blockchain,Transaction}=require('./blockchain.js');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey=ec.keyFromPrivate('1189c8f96869617e1ce90be32aed1200929ffa78b344eb5b9d0cda295b4ca701');
const myWalletAddress=myKey.getPublic('hex');

let coin=new Blockchain();
const tx1= new Transaction(myWalletAddress,'public key goes here.',10);
tx1.signTransaction(myKey);
coin.addTransaction(tx1);

console.log("\n Starting the miner....");
coin.minePendingTransactions(myWalletAddress);
console.log("\n Balance in Xavier's account is: ",coin.getBalanceOfAddress(myWalletAddress));

