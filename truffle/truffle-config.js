const HDWalletProvider = require("@truffle/hdwallet-provider");
const privKey = '1111111111111111111111111111111111111111111111111111111111111111';

module.exports = {
  compilers: {
    solc: {
      version: "^0.6.0",
    }
  },
  networks: {
    development: {
      provider: () => new HDWalletProvider({
        privateKeys: [ privKey ],
        providerOrUrl: "http://localhost:9933/",
      }),
      network_id: 2021,
    },
  } 
}