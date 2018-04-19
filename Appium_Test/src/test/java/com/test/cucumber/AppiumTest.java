package com.test.cucumber;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.remote.MobileCapabilityType;

public class AppiumTest
{

    public AndroidDriver<AndroidElement> capabilities() throws MalformedURLException
    {

        AndroidDriver<AndroidElement> driver;

        File appDir = new File("src/test/resources/app");
        File app = new File(appDir, "BBCNews.apk");
        DesiredCapabilities capabilities = new DesiredCapabilities();

        capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "Nexus6");
        capabilities.setCapability(MobileCapabilityType.APP, app.getAbsolutePath());
        capabilities.setCapability("autoGrantPermissions", true);
        capabilities.setCapability("autoAcceptAlerts", true);
        capabilities.setCapability("autoDismissAlerts", true);
        driver = new AndroidDriver<>(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        return driver;
    }

}
