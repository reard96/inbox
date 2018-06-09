const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor

const web3 = new Web3(ganache.provider()); // instance

let accounts;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of the accounts to deploy the contract

});

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(accounts);
  });
});
