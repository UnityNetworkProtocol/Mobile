export default [
  {
    name: "Accounts",
    route: "Accounts",
    icon: "ios-contact-outline",
    bg: "#C5F442",
    children: [
      {
        hash: "activty",
        name: "Cryptocurrency/Tokens",
        route: "Activity",
        icon: "ios-analytics-outline",
        bg: "#C5F442"
      },
      {
        hash: "statechannels",
        name: "Payment Channels",
        route: "StateChannels",
        icon: "ios-pulse-outline",
        bg: "#C5F442"
      },
      {
        hash: "subscriptions",
        name: "Subscriptions",
        route: "Subscriptions",
        icon: "ios-clock-outline",
        bg: "#C5F442"
      },
      {
        hash: "transactions",
        name: "Transactions",
        route: "Subscriptions",
        icon: "ios-card-outline",
        bg: "#C5F442"
      },
    ]
  },
  {
    name: "Applications",
    route: "StateChannels",
    icon: "ios-apps-outline",
    bg: "#C5F442",
    children: [
      {
        hash: "personalbank",
        name: "Digital Bank Safe",
        route: "SmartContracts",
        icon: "ios-cash-outline",
        bg: "#C5F442"
      },
      {
        hash: "deployedContracts",
        name: "Deployed",
        route: "DeployedContracts",
        icon: "ios-clipboard-outline",
        bg: "#C5F442"
      },
      {
        hash: "smartcontracts",
        name: "Token Minting",
        route: "SmartContracts",
        icon: "ios-analytics-outline",
        bg: "#C5F442"
      },
      // {
      //   hash: "domain",
      //   name: "Global Domain",
      //   route: "Domain",
      //   icon: "ios-bookmarks-outline",
      //   bg: "#C5F442"
      // },
    ]
  },
  {
    name: "Contacts",
    route: "Contacts",
    icon: "ios-contacts-outline",
    bg: "#C5F442",
    children: [
      {
        hash: "contactsadd",
        name: "Add New Contact",
        route: "ContactAdd",
        icon: "ios-add-circle-outline",
        bg: "#C5F442"
      },
      {
        hash: "friends",
        name: "Friends",
        route: "ContactsFriends",
        icon: "ios-contacts-outline",
        bg: "#C5F442"
      },
    ]
  },
  {
    name: "Identity",
    route: "IdentityAttestations",
    icon: "ios-finger-print",
    bg: "#C5F442",
    children: [
      {
        hash: "identityattestations",
        name: "Attestations",
        icon: "ios-git-network",
        bg: "#C5F442"
      },
      {
        hash: "permissions",
        name: "Permissions",
        route: "IdentityAttestations",
        icon: "ios-git-compare",
        bg: "#C5F442"
      },
    ]
  },
  
  {
    name: "Locator",
    route: "Locator",
    icon: "ios-navigate-outline",
    bg: "#C5F442",
    children: [
      {
        hash: "buyEther",
        name: "Buy Ether",
        route: "BuyEther",
        icon: "ios-compass-outline",
        bg: "#C5F442"
      },
      {
        hash: "rewards",
        name: "Rewards Programs",
        route: "SmartContracts",
        icon: "ios-cube-outline",
        bg: "#C5F442"
      },
    ]
  },
  
  {
    name: "Settings",
    route: "Settings",
    icon: "ios-construct-outline",
    bg: "#C5F442",
    children: [
      {
        hash: "guide",
        name: "Guide",
        route: "Guide",
        icon: "ios-bulb-outline",
        bg: "#C5F442",
        children: [
          {
            hash: "win",
            name: "What Is Blockchain",
            route: "StateChannels",
            icon: "ios-clipboard-outline",
            bg: "#C5F442"
          },
          {
            hash: "lost",
            name: "Wallet Security",
            route: "SmartContracts",
            icon: "ios-clipboard-outline",
            bg: "#C5F442"
          },
          {
            hash: "lost",
            name: "Decentralized Identity",
            route: "SmartContracts",
            icon: "ios-clipboard-outline",
            bg: "#C5F442"
          },
          {
            hash: "lost",
            name: "Low-Cost Transactions",
            route: "SmartContracts",
            icon: "ios-cube-outline",
            bg: "#C5F442"
          },
        ]
      },
      {
        hash: "demo",
        name: "Demo",
        route: "Demo",
        icon: "ios-construct-outline",
        bg: "#C5F442"
      },
    ]
  },
  // {
  //   name: "Guide",
  //   route: "Guide",
  //   icon: "ios-bulb-outline",
  //   bg: "#C5F442",
  //   children: [
  //     {
  //       hash: "win",
  //       name: "What Is Blockchain",
  //       route: "StateChannels",
  //       icon: "ios-clipboard-outline",
  //       bg: "#C5F442"
  //     },
  //     {
  //       hash: "lost",
  //       name: "Wallet Security",
  //       route: "SmartContracts",
  //       icon: "ios-clipboard-outline",
  //       bg: "#C5F442"
  //     },
  //     {
  //       hash: "lost",
  //       name: "Decentralized Identity",
  //       route: "SmartContracts",
  //       icon: "ios-clipboard-outline",
  //       bg: "#C5F442"
  //     },
  //     {
  //       hash: "lost",
  //       name: "Low-Cost Transactions",
  //       route: "SmartContracts",
  //       icon: "ios-cube-outline",
  //       bg: "#C5F442"
  //     },
  //   ]
  // },
];
