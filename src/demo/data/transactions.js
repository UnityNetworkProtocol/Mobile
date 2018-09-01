import LogoGitcoin from "assets/logoGitcoin.jpg";
import logoBountiesNetwork from "assets/logoBountiesNetwork.jpg";
import LogoGnosis from "assets/logoGnosis.png";
import LogoGovernX from "assets/logoGovernX.png";
import LogoSpankChain from "assets/logoSpankChain.png";
import LogoEthereum from "assets/logoEthereum.png";
import LogoAugur from "assets/logoAugur.png";
import LogoVirtuePoker from "assets/logoVirtuePoker.jpg";


export default [
  {
    txHash: "0x43214",
    name: "Gnosis",
    logo: LogoGnosis,
    symbol: "GNS",
    status: {
      state: 0,
      message: "sent",
    },
    amount: 5,
    value: "$100"
  },
  {
    txHash: "0x43213",
    name: "Augur",
    logo: LogoAugur,
    symbol: "REP",
    status: {
      state: 1,
      message: "sent",
    },
    amount: 346,
    value: "$10"
  },
  {
    txHash: "0x43233",
    name: "Ethereum",
    logo: LogoEthereum,
    symbol: "ETH",
    status: {
      state: "success",
      message: "received",
    },
    amount: 3,
    value: "$300"
  },
  {
    txHash: "0x43203",
    name: "VirtuePoker",
    logo: LogoVirtuePoker,
    symbol: "VRT",
    status: {
      state: 1,
      message: "success",
    },
    amount: 420,
    value: "$69"
  },
  {
    txHash: "0x43214",
    name: "Gnosis",
    logo: LogoGnosis,
    symbol: "GNS",
    status: {
      state: 0,
      message: "sent",
    },
    amount: 5,
    value: "$100"
  },
  {
    txHash: "0x43213",
    name: "Trust",
    logo: LogoEthereum,
    symbol: "TRST",
    status: {
      state: 1,
      message: "sent",
    },
    amount: 346,
    value: "$10"
  },
  {
    txHash: "0x43233",
    name: "Ethereum",
    logo: LogoEthereum,
    symbol: "ETH",
    status: {
      state: "success",
      message: "received",
    },
    amount: 3,
    value: "$300"
  },
  {
    txHash: "0x43203",
    name: "Spank",
    logo: LogoSpankChain,
    symbol: "SPNK",
    status: {
      state: -1,
      message: "failed",
    },
    amount: 420,
    value: "$69"
  },
];
