/* eslint-disable @typescript-eslint/ban-ts-comment */
// The name below ("CBRNFT") should match the name of your Solidity contract.
// It can be updated using the following command:
// yarn rename-contract NEW_CONTRACT_NAME
import { CBRNFT as ContractType } from "../nftTypes/typechain";
//@ts-ignore
import { ethers } from "hardhat";
import CollectionConfig from "../CollectionConfig";

export default class NftContractProvider {
  public static async getContract(): Promise<ContractType> {
    // Check configuration
    if (CollectionConfig.contractAddress === null) {
      throw (
        "\x1b[31merror\x1b[0m " +
        "Please add the contract address to the configuration before running this command."
      );
    }

    if (
      (await ethers.provider.getCode(CollectionConfig.contractAddress)) === "0x"
    ) {
      throw (
        "\x1b[31merror\x1b[0m " +
        `Can't find a contract deployed to the target address: ${CollectionConfig.contractAddress}`
      );
    }

    return (await ethers.getContractAt(
      CollectionConfig.contractName,
      CollectionConfig.contractAddress
    )) as unknown as ContractType;
  }
}

export type NftContractType = ContractType;
