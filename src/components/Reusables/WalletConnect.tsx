/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import React, { useEffect, useState } from "react";
import { injected } from "@utils/connectors";
import useENSName from "@hooks/useENSName";
import useMetaMaskOnboarding from "@hooks/useMetaMaskOnboarding";
import { formatEtherscanLink, shortenHex } from "@utils/util";

import { Button } from "./Button";

export const WalletConnect = () => {
  const { active, error, activate, chainId, account, setError } =
    useWeb3React();

  const {
    isMetaMaskInstalled,
    isWeb3Available,
    startOnboarding,
    stopOnboarding,
  } = useMetaMaskOnboarding();

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);
  const [metamaskInstalled, setMetamaskInstalled] = useState("");

  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      stopOnboarding();
    }
  }, [active, error, stopOnboarding]);

  //@ts-ignore
  const ENSName = useENSName(account);

  function statusConnect() {
    setConnecting(true);
    activate(injected, undefined, true).catch((error) => {
      // ignore the error if it's a user rejected request
      if (error instanceof UserRejectedRequestError) {
        setConnecting(false);
      } else {
        setError(error);
      }
    });
  }

  useEffect(() => {
    if (isMetaMaskInstalled) {
      setMetamaskInstalled("Connect to MetaMask");
    } else {
      setMetamaskInstalled("Install MetaMask");
    }
  }, [isMetaMaskInstalled]);

  if (typeof account !== "string") {
    return (
      <>
        {isWeb3Available ? (
          <Button
            id="wallet-connect"
            color="white"
            bgColor="purple"
            disabled={connecting}
            onClick={statusConnect}
          >
            {metamaskInstalled}
          </Button>
        ) : (
          <Button
            id="wallet-connect"
            color="white"
            bgColor="purple"
            onClick={startOnboarding}
          >
            {metamaskInstalled}
          </Button>
        )}
      </>
    );
  }

  return (
    <Button
      id="wallet-connect"
      color="white"
      bgColor="purple"
      className="wallet-connect"
      {...{
        //@ts-ignore
        href: formatEtherscanLink("Account", [chainId, account]),
        target: "_blank",
        rel: "noopener noreferrer",
      }}
    >
      <span>{ENSName || `${shortenHex(account, 4)}`}</span>
    </Button>
  );
};
