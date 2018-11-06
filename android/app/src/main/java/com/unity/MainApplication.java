package com.unity;

import android.app.Application;
import com.BV.LinearGradient.LinearGradientPackage; // Linear Gradients
import org.devio.rn.splashscreen.SplashScreenReactPackage; // Splash Screen
import com.facebook.react.ReactApplication;
import io.tradle.react.LocalAuthPackage;
import br.com.classapp.RNSensitiveInfo.RNSensitiveInfoPackage;
// import com.tradle.react.UdpSocketsModule;
// import com.peel.react.TcpSocketsModule;
// import com.peel.react.rnos.RNOSModule;
// import com.oblador.keychain.KeychainPackage;
import com.bitgo.randombytes.RandomBytesPackage;
import com.airbnb.android.react.maps.MapsPackage;

import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
// import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;

import com.horcrux.svg.SvgPackage;
import org.reactnative.camera.RNCameraPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new LocalAuthPackage(),
            new RNSensitiveInfoPackage(),
            new RNFirebasePackage(),
            new RNFirebaseMessagingPackage(),
            // new UdpSocketsModule(),
            // new TcpSocketsModule(),
            new RandomBytesPackage(),
            new LinearGradientPackage(),
            new SplashScreenReactPackage(),
            new SvgPackage(),
            // new RNOSModule(),
            new MapsPackage(),
            // new KeychainPackage(),
            new RNCameraPackage(),
            new VectorIconsPackage()
            
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
