package package2;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(
format={"html:format"},
features = "H://Softwares//Selenium//WorkSpace//Cucumber//src//resources"
)
public class holyItRunner {	
	// if there is no runner class then we have to run it using Apache ANT
}
