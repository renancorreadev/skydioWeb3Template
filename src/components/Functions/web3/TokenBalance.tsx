// import useTokenBalance from "../../hooks/useTokenBalance";
import { parseBalance } from "@utils/util";

type TokenBalanceProps = {
  tokenAddress: string;
  symbol: string;
};

const TokenBalance = ({ tokenAddress, symbol }: TokenBalanceProps) => {
  // const { account } = useWeb3React<Web3Provider>();
  // const { data } = useTokenBalance(account, tokenAddress);
  const data = "Input your token balance here";

  return (
    <p>
      {`${symbol} Balance`}: {parseBalance(data ?? 0)}
    </p>
  );
};

export default TokenBalance;
