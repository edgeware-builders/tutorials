const EdgewarePrivateKeyProvider = require('./private-provider')
// var PrivateKeyProvider = require("truffle-privatekey-provider");

var edgewarePrivateKey = "99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342";

module.exports = {
  compilers: {
    solc: {
      version: "^0.6.0",
    }
  },
  networks: {
    development: {
      provider: () => new EdgewarePrivateKeyProvider(edgewarePrivateKey, "http://localhost:9933/", 42),
      network_id: 42,
      skipDryRun: true,
      gasPrice: 1000000000
    },
  } 
}