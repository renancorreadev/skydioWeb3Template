import Image from "next/image";
import React from "react";
import { WalletConnect } from "@reusables/WalletConnect";
import { styled } from "@stitches/react";
import { usePublicCalls } from "@/hooks/usePublicCalls";

// Component to Renderize
const HeaderContainer = styled("header", {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  background: "linear-gradient(to right, #f6f6f6, #fff)",
});

const NavBar = styled("nav", {
  height: "5rem",
  display: "flex",
  alignItems: "center",
});

const LinkAnchors = styled("a", {
  marginLeft: "5rem",

  "&:hover": {
    color: "#9600bc",
  },
  "&:active": {
    color: "#460456",
    fontWeight: "bold",
  },
  "&:active:after": {
    content: "",
    height: "3px",
    borderRadius: "3px 3px 0 0",
    width: "100%",
    position: "absolute",
    bottom: "1px",
    left: "0",
    background: "var(--yellow-500)",
  },
});

const ContractName = styled("span", {
  fontSize: "1rem",
  fontWeight: "bold",
  color: "green",
});

export function Navbar() {
  const { contractName } = usePublicCalls();
  return (
    <HeaderContainer>
      <Image width="80" height="80" src="/images/omnes-logo.png" alt="logo" />
      <NavBar>
        <LinkAnchors href="#">Explorer</LinkAnchors>
        <LinkAnchors href="#">Read me</LinkAnchors>
        <LinkAnchors href="#">About</LinkAnchors>
        <LinkAnchors href="#">Web3Club</LinkAnchors>
      </NavBar>
      <ContractName>
        {contractName ? contractName : "Connect to view Contract Name"}
      </ContractName>
      <WalletConnect />
    </HeaderContainer>
  );
}
