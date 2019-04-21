var PaymentSplitter = artifacts.require('./PaymentSplitter.sol');

module.exports = function (deployer) {
  deployer.deploy(PaymentSplitter)
}
