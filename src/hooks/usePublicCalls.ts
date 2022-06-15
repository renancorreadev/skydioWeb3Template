/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useNFTContract } from "@hooks/useNFTContract";
import { useState, useEffect } from "react";
import useSWR from "swr";
import type { CBRNFT } from "../contracts/types";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";

function getContractName(contract: CBRNFT) {
  return async (_: string, address: string) => {
    const name = await contract.name();
    return name;
  };
}

export function usePublicCalls(suspense = false) {
  const [contractName, setContractName] = useState("");
  const nftContract = useNFTContract();

  const tokenAddress = "0xe2194a0f7fd145c405cc8fff0bc5fced4b70929b";
  const shouldFetch = typeof tokenAddress === "string" && !!nftContract;

  const fetch = useSWR(
    shouldFetch ? ["name", tokenAddress] : null,
    //@ts-ignore
    getContractName(nftContract),
    {
      suspense,
    }
  );

  useEffect(() => {
    if (fetch.data) {
      setContractName(fetch.data);
    }
  }, [fetch]);

  useKeepSWRDataLiveAsBlocksArrive(fetch.mutate);

  return { contractName };
}
