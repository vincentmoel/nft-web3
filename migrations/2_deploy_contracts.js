const { default: Web3 } = require("web3");

const contract = artifacts.require("MyContract");

module.exports = async function (deployer,_,accounts) {
  
  await deployer.deploy(contract);
  await Web3.eth.sendTransaction({
    from:accounts[0],
    to :'0x261AAE784E2b9183F28378410f8532CF5b2F0a60',
    value : Web3.utils.toWei('1','ether')
  });
};
