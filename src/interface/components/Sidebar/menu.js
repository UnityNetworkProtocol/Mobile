export default [
  {
    name: "Accounts",
    route: "Activity",
    icon: "ios-cash-outline",
    bg: "#C5F442"
  },
  {
    name: "Identity",
    route: "Attestations",
    icon: "ios-finger-print",
    // icon: "ios-contact-outline",
    bg: "#C5F442",
    children: [
      {
        keys: "attestations",
        name: "Attestations",
        icon: "ios-git-network",
        bg: "#C5F442"
      },
      {
        keys: "permissions",
        name: "Permissions",
        route: "Attestations",
        icon: "ios-git-compare",
        bg: "#C5F442"
      },
    ]
  },
  {
    name: "Contacts",
    route: "Contacts",
    icon: "ios-contacts-outline",
    bg: "#C5F442",
    children: [
      {
        keys: "contactsadd",
        name: "Add New Contact",
        route: "StateChannels",
        icon: "ios-contacts-outline",
        bg: "#C5F442"
      },
      {
        keys: "friends",
        name: "Friends",
        route: "StateChannels",
        icon: "ios-contacts-outline",
        bg: "#C5F442"
      },
    ]
  },
  {
    name: "Ethereum",
    route: "Attestations",
    icon: "ios-apps-outline",
    bg: "#C5F442",
    children: [
      {
        keys: "domain",
        name: "Domain",
        route: "Domain",
        icon: "ios-bookmarks-outline",
        bg: "#C5F442"
      },
      {
        keys: "statechannels",
        name: "State Channels",
        route: "StateChannels",
        icon: "ios-analytics-outline",
        bg: "#C5F442"
      },
      {
        keys: "smartcontracts",
        name: "Smart Contracts",
        route: "SmartContracts",
        icon: "ios-cloud-circle-outline",
        bg: "#C5F442"
      },
      {
        keys: "subscriptions",
        name: "Subscriptions",
        route: "Subscriptions",
        icon: "ios-card-outline",
        bg: "#C5F442"
      },
    ]
  },
  {
    name: "Store Locator",
    route: "Locator",
    icon: "ios-navigate-outline",
    bg: "#C5F442",
    children: [
      {
        keys: "buyEther",
        name: "Buy Ether",
        route: "BuyEther",
        icon: "ios-compass-outline",
        bg: "#C5F442"
      },
      {
        keys: "rewards",
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
    bg: "#C5F442"
  },
  {
    name: "Guide",
    route: "Guide",
    icon: "ios-bulb-outline",
    bg: "#C5F442",
    children: [
      {
        keys: "win",
        name: "What Is Blockchain",
        route: "StateChannels",
        icon: "ios-clipboard-outline",
        bg: "#C5F442"
      },
      {
        keys: "lost",
        name: "Wallet Security",
        route: "SmartContracts",
        icon: "ios-clipboard-outline",
        bg: "#C5F442"
      },
      {
        keys: "lost",
        name: "Decentralized Identity",
        route: "SmartContracts",
        icon: "ios-clipboard-outline",
        bg: "#C5F442"
      },
      {
        keys: "lost",
        name: "Low-Cost Transactions",
        route: "SmartContracts",
        icon: "ios-cube-outline",
        bg: "#C5F442"
      },
    ]
  },
  // {
  //   name: "Header",
  //   route: "Header",
  //   icon: "arrow-up",
  //   bg: "#477EEA",
  //   types: "11"
  // },
  // {
  //   name: "Footer",
  //   route: "Footer",
  //   icon: "arrow-down",
  //   bg: "#DA4437",
  //   types: "4"
  // },
  // {
  //   name: "Accordion",
  //   route: "NHAccordion",
  //   icon: "repeat",
  //   bg: "#C5F442",
  //   types: "5"
  // },
  // {
  //   name: "Actionsheet",
  //   route: "Actionsheet",
  //   icon: "easel",
  //   bg: "#C5F442"
  // },
  // {
  //   name: "Badge",
  //   route: "NHBadge",
  //   icon: "notifications",
  //   bg: "#4DCAE0"
  // },
  // {
  //   name: "Button",
  //   route: "NHButton",
  //   icon: "radio-button-off",
  //   bg: "#1EBC7C",
  //   types: "9"
  // },
  // {
  //   name: "Card",
  //   route: "NHCard",
  //   icon: "keypad",
  //   bg: "#B89EF5",
  //   types: "8"
  // },
  // {
  //   name: "Check Box",
  //   route: "NHCheckbox",
  //   icon: "checkmark-circle",
  //   bg: "#EB6B23"
  // },
  // {
  //   name: "Date Picker",
  //   route: "NHDatePicker",
  //   icon: "calendar",
  //   bg: "#EB6B23"
  // },
  // {
  //   name: "Deck Swiper",
  //   route: "NHDeckSwiper",
  //   icon: "swap",
  //   bg: "#3591FA",
  //   types: "2"
  // },
  // {
  //   name: "Fab",
  //   route: "NHFab",
  //   icon: "help-buoy",
  //   bg: "#EF6092",
  //   types: "2"
  // },
  {
    name: "Form & Inputs",
    route: "NHForm",
    icon: "call",
    bg: "#EFB406",
    types: "12"
  },
  // {
  //   name: "Icon",
  //   route: "NHIcon",
  //   icon: "information-circle",
  //   bg: "#bfe9ea",
  //   types: "4"
  // },
  // {
  //   name: "Layout",
  //   route: "NHLayout",
  //   icon: "grid",
  //   bg: "#9F897C",
  //   types: "5"
  // },
  // {
  //   name: "List",
  //   route: "NHList",
  //   icon: "lock",
  //   bg: "#5DCEE2",
  //   types: "8"
  // },
  // {
  //   name: "ListSwipe",
  //   route: "ListSwipe",
  //   icon: "code-working",
  //   bg: "#C5F442",
  //   types: "3"
  // },
  // {
  //   name: "Picker",
  //   route: "NHPicker",
  //   icon: "arrow-dropdown",
  //   bg: "#F50C75"
  // },
  // {
  //   name: "Radio",
  //   route: "NHRadio",
  //   icon: "radio-button-on",
  //   bg: "#6FEA90"
  // },
  // {
  //   name: "SearchBar",
  //   route: "NHSearchbar",
  //   icon: "search",
  //   bg: "#29783B"
  // },
  // {
  //   name: "Segment",
  //   route: "Segment",
  //   icon: "menu",
  //   bg: "#0A2C6B",
  //   types: "3"
  // },
  // {
  //   name: "Spinner",
  //   route: "NHSpinner",
  //   icon: "navigate",
  //   bg: "#BE6F50"
  // },
  // {
  //   name: "Tabs",
  //   route: "NHTab",
  //   icon: "home",
  //   bg: "#AB6AED",
  //   types: "3"
  // },
  // {
  //   name: "Thumbnail",
  //   route: "NHThumbnail",
  //   icon: "image",
  //   bg: "#cc0000",
  //   types: "2"
  // },
  // {
  //   name: "Toast",
  //   route: "NHToast",
  //   icon: "albums",
  //   bg: "#C5F442",
  //   types: "6"
  // },
  // {
  //   name: "Typography",
  //   route: "NHTypography",
  //   icon: "paper",
  //   bg: "#48525D"
  // }
];