require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */

console.log('Environment variables loaded:');
console.log('INFURA_API_KEY:', process.env.INFURA_API_KEY ? 'Present' : 'Missing');
console.log('PRIVATE_KEY:', process.env.PRIVATE_KEY ? 'Present' : 'Missing');
console.log('ETHERSCAN_API_KEY:', process.env.ETHERSCAN_API_KEY ? 'Present' : 'Missing');

module.exports = {
  solidity: "0.8.28",
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
