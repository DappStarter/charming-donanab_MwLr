require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remain mistake hover arena obscure sheriff'; 
let testAccounts = [
"0xde3981a01e6d1827fa7fbe7adf0209af0c7663c4a7143a37063a47de2cd6ce1d",
"0xde9d9e1a3cc7b24b70c6853c090128ccd512b60e21fd567e15e291da61ca59d4",
"0x067009f9d6c744ffda423c553637ab4f20228857016e35e8f216ec830dc4a1da",
"0x0b629879d597f8f018cf819c8915eae1439fe94730b5e0dd1062fefd6152c90a",
"0xb1d3c25996bd886b6d4fed284d6a8f5600bbf17d778e0bac3f135019b56837e8",
"0x8b8ece40a00534aa942082ea0d66deb2e7a86df670f5257a740afc0ca2991994",
"0xfb70e8fb60915d5b1b3f45aec853507b5774468b4cd55802f454df3437e1c364",
"0x86c30176b259d3c4d724b8d6bb7583daa7a3ae98273acec22898900605244d59",
"0x55d0ae16fd999d053cd24f1180bde6a1d98f476caf1c783006623fc353f6658d",
"0xb075f6c5d058fc9c4daaab5ff0a094d0f65d39c1351d91d1370b50feecb0b4c7"
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

