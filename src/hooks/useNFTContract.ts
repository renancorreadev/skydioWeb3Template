import CBRNFT_ABI from "../contracts/CBRNFT.json";
import type { CBRNFT } from "../contracts/types";
import useContract from "./useContract";

type NFTAddress = "0xe2194a0f7fd145c405cc8fff0bc5fced4b70929b";

export function useNFTContract() {
  const NFTAddress: NFTAddress = "0xe2194a0f7fd145c405cc8fff0bc5fced4b70929b";
  return useContract<CBRNFT>(NFTAddress, CBRNFT_ABI.abi);
}
