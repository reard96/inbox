const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  // account mnemonic
  'start young cheese stadium found vintage scene original flush knock husband access',
  // test network URL from Infura
  'https://rinkeby.infura.io/BCN4UObmvi43HKi2BDKA'
);

const web3 = new Web3(provider);
