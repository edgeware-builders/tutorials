var HedgeToken = artifacts.require("HedgeToken");

module.exports = function (deployer) {
  deployer.deploy(HedgeToken, "21000000000000000000000000", { gas: 2100000000 });
};