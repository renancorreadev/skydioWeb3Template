import type { CBRNFT } from "@contracts/nftTypes/typechain";
import NFTABI from "@contracts/CBRNFT.json";
import useContract from "@hooks/useContract";
import { utils } from "ethers";

export const MintNFT = () => {
  const ContractAddress = "0xe2194a0F7Fd145c405cc8fFF0BC5FcEd4b70929b";
  const contract = useContract<CBRNFT>(ContractAddress, NFTABI.abi);

  const price = 0.05;

  async function Mint() {
    try {
      const tx = await contract?.mint(1, {
        value: utils.parseEther(price.toString()).mul(1),
        gasLimit: 2000000,
      });
      tx?.wait();
    } catch (err) {
      console.log(err);
    }
  }

  return <button onClick={Mint}>Mint NFT</button>;
};
