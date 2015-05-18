package package2;

import org.apache.log4j.Logger;

import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HolyDeveloper {
	
	Logger APP_LOGS = Logger.getLogger("devpinoyLogger");
	
	@Given("^I work in ([^\"]*)$")
	public void I_work_in_microsoft(String companyType){
		APP_LOGS.debug("############################");
		APP_LOGS.debug("@Given - I work in " + companyType);
	}
	
	@When("^I meet ([^\"]*)$")
	public void when_I_meet(String personName){
		APP_LOGS.debug("@When - I meet " + personName);
	}
	
	@Then("^I ([a-zA-Z]{1,})$")
	public void then_I(String voiceAction){
		APP_LOGS.debug("@Then - I " + voiceAction);
	}
	
	@But("^He is a ([^\"]*) person$")
	public void he_is_a(String personType){
		APP_LOGS.debug("@But - He is a " + personType + "person");
	}
	

}
