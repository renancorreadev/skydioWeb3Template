/* eslint-disable @typescript-eslint/no-unused-vars */
// import { CBRNFT } from "./../../src/contracts/nftTypes/typechain/CBRNFT.d";
// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import { ethers } from "ethers";
import { jsonMeta } from "./jsonMeta";

// Alternatively you can use CommonJS syntax:
// require('./commands')

const getProvider = {
  abiContract: jsonMeta.abi,
  contractAddress: "YOUR CONTRACT ADDRESS",
  apiKey: "YOUT API KEY HERE",
  network: "rinkeby",
  provider: new ethers.providers.InfuraProvider(4, "YOUR INFURA API KEY HERE"),
  privateKey: "YOUR PRIVATE KEY",
};

const wallet = new ethers.Wallet(getProvider.privateKey, getProvider.provider);
export const signer = wallet.connect(getProvider.provider);
