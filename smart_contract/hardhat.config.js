require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/2U8631OIdZUYRUDp5fGmLJpzo_jwMwQm',
      accounts: ['60c92e3a9cf0491f00edea877fcccdc868e7b76ac21285c6e0fb6a73bc54c9df'],
    },
  },
};