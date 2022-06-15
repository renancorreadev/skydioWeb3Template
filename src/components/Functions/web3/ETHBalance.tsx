/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useETHBalance from "@hooks/useETHBalance";
import { parseBalance } from "@utils/util";

export const ETHBalance = () => {
  const { account } = useWeb3React<Web3Provider>();
  //@ts-ignore
  const { data } = useETHBalance(account);

  return <p>Balance: Ξ{parseBalance(data ?? 0)}</p>;
};
