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

// written inside a function so we can use async/await
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
