package com.nativebasekitchensink;

import android.app.Application;

import com.facebook.react.ReactApplication;
// import com.tradle.react.UdpSocketsModule;
// import com.peel.react.TcpSocketsModule;
import com.bitgo.randombytes.RandomBytesPackage;
// import com.peel.react.rnos.RNOSModule;
import com.airbnb.android.react.maps.MapsPackage;

// import com.oblador.keychain.KeychainPackage;
// import io.invertase.firebase.RNFirebasePackage;

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
            // new UdpSocketsModule(),
            // new TcpSocketsModule(),
            new RandomBytesPackage(),
            // new RNOSModule(),
            new MapsPackage(),
            // new KeychainPackage(),
            // new RNFirebasePackage(),
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
