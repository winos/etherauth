export const ADDRESS = '0xd68bef63b58efb50c4a4b8625f7336ad73952dba';

export const ABI = [{ "constant": false, "inputs": [{ "name": "_login", "type": "string" }], "name": "dropAccount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_login", "type": "string" }], "name": "authAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_login", "type": "string" }], "name": "createAccount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_login", "type": "string" }], "name": "recoveryAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "data", "type": "bytes32" }, { "name": "v", "type": "uint8" }, { "name": "r", "type": "bytes32" }, { "name": "s", "type": "bytes32" }], "name": "signerAddressRaw", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [{ "name": "data", "type": "bytes32" }, { "name": "v", "type": "uint8" }, { "name": "r", "type": "bytes32" }, { "name": "s", "type": "bytes32" }], "name": "signerAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": false, "inputs": [{ "name": "_login", "type": "string" }, { "name": "_addr", "type": "address" }], "name": "setRecoveryAddress", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_login", "type": "string" }, { "name": "_addr", "type": "address" }], "name": "setAuthAddress", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "login", "type": "string" }], "name": "Create", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "login", "type": "string" }, { "indexed": false, "name": "from", "type": "address" }, { "indexed": false, "name": "to", "type": "address" }], "name": "AuthChange", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "login", "type": "string" }, { "indexed": false, "name": "from", "type": "address" }, { "indexed": false, "name": "to", "type": "address" }], "name": "RecoveryChange", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "login", "type": "string" }, { "indexed": false, "name": "by", "type": "address" }], "name": "Drop", "type": "event" }];
