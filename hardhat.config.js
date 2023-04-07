require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    mumbai:{
      url: 'https://polygon-mumbai.g.alchemy.com/v2/gjL1J2_ELhnWg-x87yEP6vfQkKeelTqL',
      accounts:[process.env.PRIVATE_KEY]
      // gas: 2100000,
      // gasPrice: 8000000000,
      // saveDeployments: true,
    }
  },
  etherscan:{
    apiKey: process.env.API_KEY
  }
};
