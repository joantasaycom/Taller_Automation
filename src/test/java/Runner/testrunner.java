package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features = "src/test/java/Features",
glue= {"seleniumcode"},
plugin = {"pretty", "html:target/htmlreports" }
)

public class testrunner {

}
