import { expect } from "@jest/globals";
import { AccountProvider } from "./_test_/Accountprovider";

describe("should contract name is correct", () => {
  test("should contract name", async () => {
    const { contract } = AccountProvider();
    if (contract) {
      const name = await contract.name();
      expect(name).toBe("CBR NFT");
    }
  });
});
