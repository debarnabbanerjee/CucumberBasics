package package2;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(format={"html:format"})
public class holyItRunner {	
	// if there is no runner class then we have to run it using Apache ANT
}
