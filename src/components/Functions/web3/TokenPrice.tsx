/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useTokenPrice } from "@hooks/useTokenPrice";

export const TokenPrice = () => {
  const { data } = useTokenPrice();

  if (data) {
    //@ts-ignore
    return <p>Token Price: {data}</p>;
  }

  return <p>Loading...</p>;
};
