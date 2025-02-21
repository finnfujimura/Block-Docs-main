require("@nomicfoundation/hardhat-toolbox");

module.exports =  {
  solidity: "0.8.28",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: {
        mnemonic: "glide love wheel run basket blush valid increase sand avoid ship shield"
      },
      gas: 6000000,
      gasPrice: 20000000000 // 20 Gwei
    }
  }
};
