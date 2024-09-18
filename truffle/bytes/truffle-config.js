module.exports = {

	networks: {
		development: {
			host: "127.0.0.1",
			port: 8545,
			network_id: "*" // Match any network id
		}
	},
	mocha: {
		reporter: 'eth-gas-reporter',
		reporterOptions: {
		  currency: 'USD',
		  gasPrice: 21
		}
	},
	compilers: {
		solc: {
			version: "0.4.24"    // 指定使用Solidity 0.4.24版本
		}
	}
	// See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
};
