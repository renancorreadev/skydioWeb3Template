import CollectionConfigInterface from "./lib/CollectionConfigInterface";
import * as Networks from "./lib/Networks";
import * as Marketplaces from "./lib/Marketplaces";
import whitelistAddresses from "./whitelist.json";

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: "CBRNFT",
  tokenName: "CBR NFT",
  tokenSymbol: "CBR",
  hiddenMetadataUri: "ipfs://QmNW9aEuwsikSCWk9XWzcGi1QWtRw5VUHpotKkgyQ4SLuF",
  maxSupply: 10,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xe2194a0F7Fd145c405cc8fFF0BC5FcEd4b70929b",
  marketplaceIdentifier: "my-nft-token",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
