/* eslint-disable @typescript-eslint/ban-ts-comment */
import useSWR from "swr";
import type { CBRNFT } from "../contracts/types";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import { useNFTContract } from "../hooks/useNFTContract";

function getTokenPrice(contract: CBRNFT) {
  return async (_: string, address: string) => {
    const price = await contract.cost();
    return price;
  };
}

export function useTokenPrice(suspense = false) {
  const contract = useNFTContract();
  const tokenAddress = process.env.NFTCONTRACT_ADDRESS;
  const shouldFetch = typeof tokenAddress === "string" && !!contract;

  const tokenPrice = useSWR(
    shouldFetch ? ["cost", tokenAddress] : null,
    //@ts-ignore
    getTokenPrice(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(tokenPrice.mutate);

  return tokenPrice;
}
