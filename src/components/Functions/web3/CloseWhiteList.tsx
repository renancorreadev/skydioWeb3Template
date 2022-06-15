import type { CBRNFT } from "@contracts/nftTypes/typechain";
import NFTABI from "@contracts/CBRNFT.json";
import useContract from "@hooks/useContract";

export const CloseWhiteList = () => {
  const ContractAddress = "0xe2194a0F7Fd145c405cc8fFF0BC5FcEd4b70929b";
  const contract = useContract<CBRNFT>(ContractAddress, NFTABI.abi);

  async function SetWhiteList() {
    const tx = await contract?.setWhitelistMintEnabled(false);
    tx?.wait();
  }

  return <button onClick={SetWhiteList}>Close WhiteList</button>;
};
