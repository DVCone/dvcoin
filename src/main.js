const {Blockchain, transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('499796e23762c9338e064418088e245c4ad810fbb772418b06b5cf551021f717');
const myWalletAddress = myKey.getPublic('hex');

let dvCoin = new Blockchain();

const tx1 = new transaction(myWalletAddress, 'public key goes hire', 10);
tx1.signTransaction(myKey);
dvCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
dvCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of mormon is', dvCoin.getBalanceOfAddress(myWalletAddress));

dvCoin.chain[1].transactions[0].amount = 1;
console.log('is chain valid?', dvCoin.isChainValid());





//Video 1
// addBlock(newBlock){
// newBlock.previousHash = this.getLatestBlock().hash;
// newBlock.mineBlock(this.difficulty);
// // newBlock.hash = newBlock.calculateHash();
// this.chain.push(newBlock);
// }

// console.log('if blockchain valid?' + dvCoin.isChainValid());
//  //console.log(JSON.stringify(dvCoin, null, 4));
// dvCoin.chain[1].data = { amount: 100};
// dvCoin.chain[1].hash = dvCoin.chain[1].calculateHash();   
// console.log('if blockchain valid?' + dvCoin.isChainValid());

//video 2
// console.log('mining block 1...');
// dvCoin.addBlock(new Block(1, "10/01/2001", {amount: 4 }));
// console.log('mining block 2...');
// dvCoin.addBlock(new Block(2, "12/01/2001", {amount: 10 }));

//video 3
// dvCoin.createTransaction(new transaction('address1', 'address2', 100));
// dvCoin.createTransaction(new transaction('address2', 'address1', 50));