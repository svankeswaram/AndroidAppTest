import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import edu.umd.cs.findbugs.annotations.SuppressWarnings;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/resources/features"}, plugin = {"pretty","html:target/cucumber-html-report"}, tags = {"@Include"})

@java.lang.SuppressWarnings("deprecation")
@SuppressWarnings("PMD")
public class RunCukesIT
{

}
 