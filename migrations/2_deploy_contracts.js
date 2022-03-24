const contract = artifacts.require("MyContract");

module.exports = function (deployer) {
  deployer.deploy(contract);
};
