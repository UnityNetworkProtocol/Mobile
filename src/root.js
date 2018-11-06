import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

/**
 * Views
 * @desc A list of primary views for the Mobile Application
 */
import Activity from "views/Activity/";
import Accounts from "views/Accounts/";
import Contacts from "views/Contacts/";
import ContactPerson from "views/ContactPerson/";
import ContractDeployed from "views/ContractDeployed/";
import DeployedContracts from "views/DeployedContracts/";
import Home from "views/Home/";
import IdentityAttestations from "views/IdentityAttestations/";
import IdentityPermissions from "views/IdentityPermissions/";
import Settings from "views/Settings/";
import Transactions from "views/Transactions/";
import Locator from "views/Locator/";
import Wallet from "views/Wallet/";
import Guide from "views/Guide/";
import Demo from "views/Demo/";
import StateChannels from "views/StateChannels/";
import TokenQuest from "views/TokenQuest/";
import TransactionHash from "views/TransactionHash/";
// Components
import SideBar from "components/general/Sidebar";
// Containers
import AccountOverview from "containers/AccountOverview";
import TransactionOverview from "containers/TransactionOverview";

import QRScanner from "views/QRScanner/";


/**
 * Drawer
 * @desc The Drawwer navigation screens.
 */
const Drawer = DrawerNavigator(
  {
    // Primary Screens
    Activity: { screen: Activity },
    Accounts: { screen: Accounts },
    Contacts: { screen: Contacts },
    ContactPerson: { screen: ContactPerson },
    ContractDeployed: { screen: ContractDeployed },
    DeployedContracts: { screen: DeployedContracts },
    Home: { screen: Home },
    IdentityAttestations: { screen: IdentityAttestations },
    IdentityPermissions: { screen: IdentityPermissions },
    Guide: { screen: Guide },
    Locator: { screen: Locator },
    Settings: { screen: Settings },
    Transactions: { screen: Transactions },
    StateChannels: { screen: StateChannels },
    TransactionHash: { screen: TransactionHash },
    TokenQuest: { screen: TokenQuest },
    QRScanner: { screen: QRScanner },
    Wallet: { screen: Wallet },
    
    // Demo
    Demo: { screen: Demo },

    // Containers
    AccountOverview: { screen: AccountOverview},
    TransactionOverview: { screen: TransactionOverview},
  },
  {
    initialRouteName: "Accounts",
    
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer },

  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;

