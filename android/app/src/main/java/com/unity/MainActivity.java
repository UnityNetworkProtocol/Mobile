package com.unity;
import com.facebook.react.ReactActivity;
import android.os.Bundle; // SplashScreen
import org.devio.rn.splashscreen.SplashScreen; // SplashScreen
public class MainActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Unity";
    }
}
