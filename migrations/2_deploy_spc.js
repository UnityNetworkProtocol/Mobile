var SimplePaymentChannel = artifacts.require("./SimplePaymentChannel.sol");

module.exports = function (deployer) {
  deployer.deploy(SimplePaymentChannel, "0xbE335c3D8614a863A550966372c865E079CcA4E8", 1 );
};
