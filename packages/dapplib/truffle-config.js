require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remember method inflict argue suspect twenty'; 
let testAccounts = [
"0x9f80915d2172589f1911bbcbd1c80ffeb206a450979f0e9098045d1aa12a34fb",
"0xbf5371f80df5b7e1f3815cbf28ba26629bb6ff5e6ceb157ffd12526d23e33c58",
"0x099e33a83c6a3699b3e774d9edecb34389401ed028965b26c89d57ad0fb1a77b",
"0xe03960bf2b7ec9050c22f11a85bbe79345ef822f664db8c004d8f55d504f16ac",
"0x712ceead3d40c7912422a10c049815334628bb680df5a4e8b35043a9cf0b9efc",
"0x724ceb5593e8f0e9c2d054a5c1ec988f8ddc1eb0e068b1c009e642064dcefd7a",
"0xbc661a5783f98e281b9dd641f09ec019ac7b63eb889d5625d450aadf08a22c67",
"0x652624c9831c6f0c921f5f96fd12910162e56d24c826d5356baa60b24f79c3fe",
"0xf147044d53a691fff8bf2aecbfef8b51f107e21bb7a42652bf34cc9b9c1b6a6b",
"0xf0b4310835e78daae1ddc35d25b679f6b341baaea6574973b6ef3a85f7601ee4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

