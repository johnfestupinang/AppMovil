package com.appmovil;

import com.facebook.react.ReactActivity;
import expo.modules.firebase.app.FirebaseAppPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "AppMovil";
    }

    @Override
    public List<Package> expoPackages() {
    // Here you can add your own packages. 
    return Arrays.<Package>asList(
        new FirebaseAppPackage() // Include this. 
    );
    }

}
