require('babel-register');
require('babel-polyfill');
var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    sepolia: {
      networkCheckTimeout: 100000,
      provider: () => {
        return new HDWalletProvider(mnemonic, 'https://sepolia.infura.io/v3/' + infura_apikey)
      },
      network_id: '*', // eslint-disable-line camelcase
      // gas: 4465030,
      // gasPrice: 2000000000,
    },
    goerli: {
      networkCheckTimeout: 100000,
      provider: () => {
        return new HDWalletProvider(mnemonic, 'https://goerli.infura.io/v3/' + infura_apikey)
      },
      network_id: '5', // eslint-disable-line camelcase
      // gas: 4465030,
      // gasPrice: 2000000000,
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "^0.8.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
