const Web3 = require('web3');

// genesis private key
const privKey = '1111111111111111111111111111111111111111111111111111111111111111';
const addressFrom = '0x19e7e376e7c213b7e7e7e46cc70a5dd086daff2a';
const addressTo = '0x6bB5423f0Dd01B8C5028a1bc01e1f1bDe4523e72';
const web3 = new Web3('http://localhost:9933/');

// Create transaction
const deploy = async () => {
  console.log(
    `Attempting to make transaction from ${addressFrom} to ${addressTo}`
  );

  const transactionArgs = {
    from: addressFrom,
    to: addressTo,
    value: web3.utils.toWei('1337', 'ether'),
  };
  const gas = await web3.eth.estimateGas(transactionArgs);
  const createTransaction = await web3.eth.accounts.signTransaction(
    {
      ...transactionArgs,
      gas,
    },
    privKey
  );

  // Deploy transaction
  const createReceipt = await web3.eth.sendSignedTransaction(
    createTransaction.rawTransaction
  );
  console.log(
    `Transaction successful with hash: ${createReceipt.transactionHash}`
  );
  process.exit(0);
};

deploy();