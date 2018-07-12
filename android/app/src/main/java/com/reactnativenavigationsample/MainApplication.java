package com.reactnativenavigationsample;

import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.reactnativenavigation.NavigationApplication;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  @Override public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @NonNull
  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage()
    );
  }

  @Nullable @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }

  @Nullable @Override public String getJSMainModuleName() {
    return "index";
  }
}
