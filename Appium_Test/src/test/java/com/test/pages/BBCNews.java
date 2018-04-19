package com.test.pages;

import static org.junit.Assert.assertTrue;
import static org.testng.Assert.assertEquals;

import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.test.cucumber.AppiumTest;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.appium.java_client.MobileBy;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;

public class BBCNews
{

    private AndroidDriver<AndroidElement> driver;

    private AppiumTest                    appium = new AppiumTest();

    /**
     * Constructor.
     */

    public BBCNews() throws Exception
    {

        driver = appium.capabilities();

    }

    @Given("^BBC News Home screen$")
    public void bbc_News_Home_screen() throws Throwable
    {

        // Tap on Push notification 'No'
        driver.findElementById("bbc.mobile.news.uk:id/push_no").click();

        // Tap on
        driver.findElementById("android:id/button1").click();

        driver.runAppInBackground(2);

    }

    @Then("^I tap on Video Tab$")
    public void i_tap_on_Video_Tab() throws Throwable
    {

        // Click on Video tab
        driver.findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[1]/android.support.v4.widget.DrawerLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.HorizontalScrollView/android.widget.LinearLayout/android.support.v7.app.ActionBar.Tab[4]/android.widget.TextView")
                        .click();

    }
    @And("^Verify the \"([^\"]*)\" text$")
    public void verify_the_text(String chanelText) throws Throwable {
        
        // Verify the 'BBC News Channel' text
       
        assertEquals(driver.findElementById("bbc.mobile.news.uk:id/item_layout_name").getText(),chanelText);
      
    }

    
    @Then("^I scroll down the screen$")
    public void i_scroll_down_the_screen() throws Throwable
    {

        // Scroll
        driver.findElement(MobileBy
                        .AndroidUIAutomator("new UiScrollable(new UiSelector()).scrollIntoView(" + "new UiSelector().text(\"Copyright © 2018 BBC\"));"));

    }

    @Then("^Verify the BBC copyright$")
    public void verify_the_BBC_copyright() throws Throwable
    {

        // Verify the BBC copyright text
        assertEquals(driver.findElementById("bbc.mobile.news.uk:id/copyright_symbol").getText(), "Copyright © 2018 BBC");

    }

    @When("^I click on Search icon$")
    public void i_click_on_Search_icon() throws Throwable
    {

        // click on the search icon
        driver.findElementByAccessibilityId("Search").click();

    }

    @Then("^Search topics and articles opened$")
    public void search_topics_and_articles_opened() throws Throwable
    {

        // Verify the search field and text in the search field
        assertEquals(driver.findElementById("bbc.mobile.news.uk:id/search").getText(), "Search topics and articles");

    }

    @Then("^Enter \"([^\"]*)\"$")
    public void enter(String searchItem) throws Throwable
    {

        // Enter the 'tourism trade is under pressure' text
        driver.findElementById("bbc.mobile.news.uk:id/search").sendKeys(searchItem);

    }

    @Then("^I click on the article$")
    public void i_click_on_the_article() throws Throwable
    {

        Thread.sleep(5000);
        driver.findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView[1]")
                        .click();
    }

    @Then("^Verify the content \"([^\"]*)\"$")
    public void verify_the_content(String arg1) throws Throwable
    {

        // Verify the text England text
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOf(driver.findElementByXPath("//android.view.View[@text='England']")));
        assertEquals(driver.findElementByXPath("//android.view.View[@text='England']").getText(), "England");
           
         // Click the close button on the browser
        driver.findElementById("com.android.chrome:id/close_button").click();

        // Check the app screen by verify the search field text
        assertEquals(driver.findElementById("bbc.mobile.news.uk:id/search").getText(), "tourism trade is under pressure");

    }
    
    @Then("^Navigate back to Home page$")
    public void navigate_back_to_Home_page() throws Throwable {
    
        // Click on Back
        driver.findElementByXPath("//android.widget.ImageButton[@content-desc='Back']").click();
        
        assertTrue(driver.findElementById("bbc.mobile.news.uk:id/logo").isEnabled());
        
    }

    @After("@BBCNews")
    public void tearDown() throws InterruptedException, Exception
    {

        // quit
        driver.quit();

    }
}