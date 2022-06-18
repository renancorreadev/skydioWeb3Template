/* eslint-disable quotes */
// import { TEST_ADDRESS_NEVER_USE_SHORTENED } from "../support/ethereum";

describe("Wallet", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Metamask Button is Visible", () => {
    cy.get("#wallet-connect").click;
  });
});
