var PrivateKeyProvider = require("truffle-privatekey-provider");

var privateKey = "99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342";

module.exports = {
  networks: {
    development: {
      provider: () => new PrivateKeyProvider(privateKey, "http://127.0.0.1:9933"),
      network_id: 42
    },
  } 
}

