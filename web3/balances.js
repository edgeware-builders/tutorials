const Web3 = require('web3');

// Variables definition
const addressFrom = '0x19e7e376e7c213b7e7e7e46cc70a5dd086daff2a';
const addressTo = '0x6bB5423f0Dd01B8C5028a1bc01e1f1bDe4523e72';
const web3 = new Web3('http://localhost:9933/');

// Balance call
const balances = async () => {
  const balanceFrom = web3.utils.fromWei(
    await web3.eth.getBalance(addressFrom),
    'ether'
  );
  const balanceTo = await web3.utils.fromWei(
    await web3.eth.getBalance(addressTo),
    'ether'
  );

  console.log(`The balance of ${addressFrom} is: ${balanceFrom} ETH.`);
  console.log(`The balance of ${addressTo} is: ${balanceTo} ETH.`);
};

balances();