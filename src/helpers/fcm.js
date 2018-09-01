import FCM, { FCMEvent, NotificationType, RemoteNotificationResult, WillPresentNotificationResult } from 'react-native-fcm';
import { Platform, AsyncStorage, AppState } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { addNewTransaction } from '../helpers/transactions';

export async function getFCMToken() {
  const fcmToken = await FCM.getFCMToken();
  console.log(`FCM Token: ${fcmToken}`);
  return fcmToken;
}

export function registerKilledListener() {
  FCM.on(FCMEvent.Notification, notif => {
    console.log(`registerKilledListener notif: ${notif}`);
    AsyncStorage.setItem('lastNotification', JSON.stringify(notif));
    if (notif.opened_from_tray) {
      setTimeout(() => {
        if (notif._actionIdentifier === 'reply') {
          if (AppState.currentState !== 'background') {
            console.log(`User replied ${JSON.stringify(notif._userText)}`);
          } else {
            AsyncStorage.setItem('lastMessage', JSON.stringify(notif._userText));
          }
        }
        if (notif._actionIdentifier === 'view') {
          console.log('User clicked View in App');
        }
        if (notif._actionIdentifier === 'dismiss') {
          console.log('User clicked Dismiss');
        }
      }, 1000);
    }
  });
}

export function registerAppListener() {
  FCM.on(FCMEvent.Notification, notif => {
    console.log(`registerAppListener notif: ${notif}`);
    const { sessionId, transactionId } = notif;

    if (Platform.OS === 'ios') {
      switch (notif._notificationType) {
      case NotificationType.Remote:
        notif.finish(RemoteNotificationResult.NewData);
        break;
      case NotificationType.NotificationResponse:
        addNewTransaction(sessionId, transactionId).then(() => {
          Navigation.showModal({
            screen: 'WalletConnect.TransactionScreen',
            navigatorStyle: { navBarHidden: true },
            navigatorButtons: {},
            animationType: 'slide-up',
          });
        });
        break;
      case NotificationType.WillPresent:
        notif.finish(WillPresentNotificationResult.All);
        break;
      default:
        break;
      }
    }
  });
}

export function initializeFCM() {
  FCM.createNotificationChannel({
    id: 'default',
    name: 'Default',
    description: 'used for example',
    priority: 'high'
  })
  registerAppListener(this.props.navigation);
  FCM.getInitialNotification().then(notif => {
    this.setState({
      initNotif: notif
    });
    if (notif && notif.targetScreen === "detail") {
      setTimeout(() => {
        this.props.navigation.navigate("Detail");
      }, 500);
    }
  });

  try {
    let result = await FCM.requestPermissions({
      badge: false,
      sound: true,
      alert: true
    });
  } catch (e) {
    console.error(e);
  }
}
