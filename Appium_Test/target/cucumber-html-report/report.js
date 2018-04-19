$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01-BBCNews.feature");
formatter.feature({
  "line": 2,
  "name": "Navigate Video from BBC New Home and search for Article",
  "description": "",
  "id": "navigate-video-from-bbc-new-home-and-search-for-article",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Include"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "BBC News Home screen",
  "keyword": "Given "
});
formatter.match({
  "location": "BBCNews.bbc_News_Home_screen()"
});
formatter.result({
  "duration": 26134994691,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.75 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027GBD1-CZC7118WM2\u0027, ip: \u002710.133.12.156\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{app\u003dC:\\AUDITTOOL_Workspace\\Appium_Test\\src\\test\\resources\\app\\BBCNews.apk, appPackage\u003dbbc.mobile.news.uk, deviceScreenSize\u003d1440x2560, networkConnectionEnabled\u003dtrue, warnings\u003d{}, appWaitPackage\u003dbbc.mobile.news.uk, appWaitActivity\u003dbbc.mobile.news.v3.app.TopLevelActivity, autoDismissAlerts\u003dtrue, databaseEnabled\u003dfalse, deviceName\u003demulator-5554, platform\u003dLINUX, deviceUDID\u003demulator-5554, appActivity\u003dbbc.mobile.news.v3.app.TopLevelActivity, desired\u003d{app\u003dC:\\AUDITTOOL_Workspace\\Appium_Test\\src\\test\\resources\\app\\BBCNews.apk, autoGrantPermissions\u003dtrue, autoDismissAlerts\u003dtrue, platformName\u003dAndroid, deviceName\u003dNexus6, autoAcceptAlerts\u003dtrue}, platformVersion\u003d8.0.0, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, autoGrantPermissions\u003dtrue, javascriptEnabled\u003dtrue, deviceModel\u003dAndroid SDK built for x86, platformName\u003dAndroid, deviceManufacturer\u003dGoogle, autoAcceptAlerts\u003dtrue}]\nSession ID: 2e532f75-60fe-49bd-9739-fcb6ff5cc7d2\n*** Element info: {Using\u003did, value\u003dandroid:id/button1}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:453)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:70)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\r\n\tat com.test.pages.BBCNews.bbc_News_Home_screen(BBCNews.java:46)\r\n\tat ✽.Given BBC News Home screen(01-BBCNews.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 7,
  "name": "Navigate Video from BBC New Home",
  "description": "",
  "id": "navigate-video-from-bbc-new-home-and-search-for-article;navigate-video-from-bbc-new-home",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@BBCNews"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I tap on Video Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify the \"BBC News Channel\" text",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I scroll down the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify the BBC copyright",
  "keyword": "And "
});
formatter.match({
  "location": "BBCNews.i_tap_on_Video_Tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BBC News Channel",
      "offset": 12
    }
  ],
  "location": "BBCNews.verify_the_text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BBCNews.i_scroll_down_the_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BBCNews.verify_the_BBC_copyright()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1056706513,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "BBC News Home screen",
  "keyword": "Given "
});
formatter.match({
  "location": "BBCNews.bbc_News_Home_screen()"
});
