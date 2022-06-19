/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, useEffect, useCallback } from "react";
import useSWR from "swr";
import useKeepSWRDataLiveAsBlocksArrive from "../useKeepSWRDataLiveAsBlocksArrive";
import type { CBRNFT } from "../../contracts/types";
import { AccountProvider } from "./Accountprovider";

function getContractName(contract: CBRNFT) {
  return async (_: string, address: string) => {
    const name = await contract.name();
    return name;
  };
}

export function usePublicCall_Test(suspense = false) {
  const { contract } = AccountProvider();

  const [contractName, setContractName] = useState<null | string | any>("");

  const tokenAddress = "0xe2194a0f7fd145c405cc8fff0bc5fced4b70929b";
  const shouldFetch = typeof tokenAddress === "string" && !!contract;

  const fetch = useSWR(
    shouldFetch ? ["name", tokenAddress] : null,
    //@ts-ignore
    getContractName(contract),
    {
      suspense,
    }
  );

  const update = useCallback(() => setContractName(fetch.data), [fetch]);

  useEffect(() => {
    if (fetch.data) {
      setContractName(fetch.data);
    }
  }, [fetch]);

  useKeepSWRDataLiveAsBlocksArrive(fetch.mutate);

  return { contractName, update };
}
