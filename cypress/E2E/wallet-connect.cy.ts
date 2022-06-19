/* eslint-disable quotes */
// import { TEST_ADDRESS_NEVER_USE_SHORTENED } from "../support/ethereum";

import { signer } from "../support/e2e";

describe("should connect Wallet button with signer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("it should Metamask Button is Visible", () => {
    signer.getAddress().then((address) => {
      cy.get("#wallet-connect").contains(address);
    });
  });
});

describe("should show install metamask message if not installed.", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("it should must be the title Install Metamask ", () => {
    cy.contains("#wallet-connect", "Install MetaMask");
  });
});

describe("should show all Nav Links", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("it should must be all Header links. ", () => {
    cy.contains("nav", "Explorer").then(() => {
      cy.contains("nav", "Read me").then(() => {
        cy.contains("nav", "About").then(() => {
          cy.contains("nav", "Web3Club");
        });
      });
    });
  });
});
