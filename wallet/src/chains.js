const Ethereum = {
  hex: '0x1',
  name: 'Ethereum',
  rpcUrl: 'https://mainnet.infura.io/v3/2999cf23bc434ab386914374420e3f17',
  ticker: 'ETH',
};

const EthereumSepolia = {
  hex: '0xaa36a7',
  name: 'Ethereum Sepolia',
  rpcUrl: 'https://sepolia.infura.io/v3/2999cf23bc434ab386914374420e3f17',
  ticker: 'SEPOLIA',
};

export const CHAINS_CONFIG = {
  '0x1': Ethereum,
  '0xaa36a7': EthereumSepolia,
};
