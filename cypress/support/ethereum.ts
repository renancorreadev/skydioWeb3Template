/**
 * Updates cy.visit() to include an injected window.ethereum provider.
 */

import { Eip1193Bridge } from "@ethersproject/experimental/lib/eip1193-bridge";
import { JsonRpcProvider } from "@ethersproject/providers";
import { Wallet } from "@ethersproject/wallet";

// todo: figure out how env vars actually work in CI
// const TEST_PRIVATE_KEY = Cypress.env('INTEGRATION_TEST_PRIVATE_KEY')
const TEST_PRIVATE_KEY =
  "2173c08a08ac8a754cb8cddc55840a0679decfb5a9a6cd69e348c2ca0c79bb19";

// address of the above key
export const TEST_ADDRESS_NEVER_USE = new Wallet(TEST_PRIVATE_KEY).address;

export const TEST_ADDRESS_NEVER_USE_SHORTENED = `${TEST_ADDRESS_NEVER_USE.substr(
  0,
  6
)}...${TEST_ADDRESS_NEVER_USE.substr(-4, 4)}`;

const provider = new JsonRpcProvider(
  "https://rinkeby.infura.io/v3/ae03e9e90419456eac75681088e9312f",
  4
);
const signer = new Wallet(TEST_PRIVATE_KEY, provider);
export const injected = new (class extends Eip1193Bridge {
  chainId = 4;

  async sendAsync(...args: any[]) {
    console.debug("sendAsync called", ...args);
    return this.send(...args);
  }
  async send(...args: any[]) {
    console.debug("send called", ...args);
    const isCallbackForm =
      typeof args[0] === "object" && typeof args[1] === "function";
    let callback;
    let method;
    let params;
    if (isCallbackForm) {
      callback = args[1];
      method = args[0].method;
      params = args[0].params;
    } else {
      method = args[0];
      params = args[1];
    }
    if (method === "eth_requestAccounts" || method === "eth_accounts") {
      if (isCallbackForm) {
        callback({ result: [TEST_ADDRESS_NEVER_USE] });
      } else {
        return Promise.resolve([TEST_ADDRESS_NEVER_USE]);
      }
    }
    if (method === "eth_chainId") {
      if (isCallbackForm) {
        callback(null, { result: "0x4" });
      } else {
        return Promise.resolve("0x4");
      }
    }
    try {
      const result = await super.send(method, params);
      console.debug("result received", method, params, result);
      if (isCallbackForm) {
        callback(null, { result });
      } else {
        return result;
      }
    } catch (error) {
      if (isCallbackForm) {
        callback(error, null);
      } else {
        throw error;
      }
    }
  }
})(signer, provider);
